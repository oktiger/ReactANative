import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Dimensions, Text, View, ScrollView } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width

export default function App() {
  const [location, setLocation] = useState()
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
    console.log(location)
  }
  useEffect(() => {
    ask()
  }, [])
  return (<View style={styles.container}>
    <View style={styles.city}>
      <Text style={styles.cityName}>Seoul</Text>
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


