# CSS
-----
1. Transform
    - 트랜지션은 CSS 스타일 변경을 부드럽게 표현하기 위해 duration(지속시간)을 부여하여 속도를 조절한다.
    - 트랜스폼(Transform) 은 요소에 이동(translate), 회전(rotate), 확대축소(scale), 비틀기(skew) 효과를 부여하기 위한 함수를 제공. 단, 애니메이션 효과를 제공하지는 않기 때문에 정의된 프로퍼티가 바로 적용되어 화면에 표시된다.

    1. translate(x, y) : 
    | translate() 속성    |  |
    | --- | --- |
    | transform: translate()    | translate(X, Y) 함수는 요소를 왼쪽에서부터 X 거리, 위에서부터 Y 거리만큼 상대적으로 위치를 정하거나, 이동 및 재배치를 지정합니다. Y 방향의 거리는 생략 할 수 있지만, 이 경우의 Y 방향의 거리는 '0'이 된다.    |
    | transform: translateX()    | translateX(거리) 함수는 좌우(수평방향)의 이동거리 값을 지정한다.    |
    | transform: translateY()    | translateY(거리) 함수는 상하(수직방향)의 이동거리 값을 지정한다.    |
    | transform: translateZ()    | translateZ(거리) 함수는 Z 방향의 거리로 이동을 지정한다. 이 함수는 백분율 값으로 지정할 수 없으며, 백분율 값으로 지정해도 '0'이 된다.   |
    
    2. scale() 
        | scale() 속성    |  |
        | --- | --- |
        | transform: scale()    | scale(0.X, 0.Y) 함수는 X 만큼 수평방향, Y 만큼 수직방향 으로 크기를 늘리거나 줄인다.    |
        | transform: scaleX()    | scaleX(배율) 함수는 좌우(수평방향)로의 크기를 지정한만큼 늘리거나 줄인다.    |
        | transform: scaleY()    | scaleY(배율) 함수는 상하(수직방향)로의 크기를 지정한만큼 늘리거나 줄인다.    |
    
    4. skew()
        | skew() 속성    |  |
        | --- | --- |
        | transform: skew()    | skew(deg, deg) 함수는 X 만큼 수평방향, Y 만큼 수직방향 으로 해당 요소를 비틀어 왜곡한다.    |
        | transform: skew()    | skew(각도) 함수는 좌우(수평방향)로의 크기를 지정한만큼 해당 요소를 비틀어 왜곡한다.    |
        | transform: skew()    | skew(각도) 함수는 상하(수직방향)로의 크기를 지정한만큼해당 요소를 비틀어 왜곡한다.    |
    6. rotate()
        | rotate() 속성    |  |
        | --- | --- |
        | transform: rotate()    | rotate(deg, deg) 함수는 X 만큼 수평방향, Y 만큼 수직방향 으로 해당 요소를 회전시킨다.    |
        | transform: rotate()    | rotate(각도) 함수는 좌우(수평방향)로의 크기를 지정한만큼 해당 요소를 비틀어 회전시킨다.    |
        | transform: rotate()    | rotate(각도) 함수는 상하(수직방향)로의 크기를 지정한만큼해당 요소를 비틀어 회전시킨다.    |
    
    
    6. transform-origin : 요소의 기준점을 설정할 때 사용. 기본기준점은 요소의 정중앙이다(50%, 50%)
## 표넣기

    - line-height : line-box 의 높이를 설정하는 CSS 속성. 일반적으로 텍스트 줄 사이의 거리를 설정.
