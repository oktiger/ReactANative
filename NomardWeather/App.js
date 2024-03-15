import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Dimensions, Text, View, ScrollView } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width
const API_KEY = "233f757f83aa38276611bcc15cb7184d"

export default function App() {
  const [city, setCity] = useState("Loading....")
  const [days, setDays] = useState([])
  const [ok, setOk] = useState(true)
  const ask = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false)
    }
    const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({ accuracy: 5 })
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    )
    setCity(location[0].city)
    const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=alert&appid=${API_KEY}`)
    const json = await response.json();
    console.log(json)
  }
  useEffect(() => {
    ask()
  }, [])
  return (<View style={styles.container}>
    <View style={styles.city}>
      <Text style={styles.cityName}>{city}</Text>
    </View>
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.weather}
    >
      <View style={styles.day}>
        <Text style={styles.temp}>27</Text>
        <Text style={styles.description}>Sunny</Text>
      </View>
      <View style={styles.day}>
        <Text style={styles.temp}>27</Text>
        <Text style={styles.description}>Sunny</Text>
      </View>
      <View style={styles.day}>
        <Text style={styles.temp}>27</Text>
        <Text style={styles.description}>Sunny</Text>
      </View>
    </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: "teal"
  },
  city: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cityName: {
    fontSize: 68,
    fontWeight: '500'
  },
  weather: {

  },
  day: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  temp: {
    marginTop: 50,
    fontSize: 178,
  },
  description: {
    marginTop: -30,
    fontSize: 60,
  },
})


