# ReactANative

# 노마드코더 클론코딩

# #2 Make WeatherApp

- 모든 View는 FlexContainer다.
- 모든 View는 column이다
- 너비와 높이에 기반해서 레이아웃을 만들지 않는다
- expo app에서 refresh가 되지 않는다면, 서버에서 r을 눌러줘
- app은 web과 다르게 전부 components야
  scroll하기 위한 'scrollview';
  옆으로 넘기고 싶다면? props 중 'horizontal'을 넣어주자
  또, scrollview를 쓸꺼면 style prop을 쓰면 안된다. 대신 contentContainerStyle을 사용하자 (ReactNative Documemt를 잘 활용하자)
  - 넘기기를 통해 해당페이지를 벗어나게 된다면
    flex가 없어야지 화면의 확장이 가능해진다.
- server에서 m을 누르면 developer toggle이 뜬다. 여기서 'Show Element Inspector'에 들어가면 크롬의 개발자도구처럼 components들의
  Inspect를 상세히 볼 수 있다.

- 앱의 크기를 들고와주는 API가 있다
  'Dimensions'를 import하면 사용가능하다.

  ```javascript
  const { width: SCREEN_WIDTH } = Dimensions.get('window')
  # screen_width는 임의로 네이밍한 것.
  ```

  - ScrollView의 또다른 prop : pagingEnabled
