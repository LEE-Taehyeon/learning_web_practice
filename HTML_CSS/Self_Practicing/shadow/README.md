# CSS
-----
1. Shadow
    - text-shadow : 텍스트에 그림자 효과를 부여하는 property.

    ``` 선택자 { text-shadow: Horizontal-offset Vertical-offset Blur-Radius Shadow-Color;} ```

    | 프로퍼티값 |  단위  | 설명 | 생략가능여부  |
    | --- | --- | --- | --- |
    | Horizontal-offset  |  px  |  그림자를 텍스트의 오른쪽으로 지정값만큼 이동시킨다.  | 생략불가능  |
    | Vertical-offset  |  px  |  그림자를 텍스트의 아래로 지정값만큼 이동시킨다.  | 생략불가능  |
    | Blur-Radius  |  px  |  그림자의 흐림정도를 지정한다. 지정값만큼 그림자가 커지고 흐려진다.(양수)  | 생략가능  |
    | Shadow-Color  |  color  |  그림자의 색상을 지정한다.  | 생략가능  |


    - box-shadow : 요소에 그림자 효과를 부여하는 property.

    <br></br>
    ``` 선택자 { box-shadow: Inset Horizontal-offset Vertical-offset Blur-Radius Spread Shadow-Color;} ```

    | 프로퍼티값 |  단위  | 설명 | 생략가능여부  |
    | --- | --- | --- | --- |
    | Inset  |  inset  |  inset 키워드를 지정하면 그림자가 요소 안쪽에 위치한다.  | 생략가능  |
    | Vertical-offset  |  px  |  그림자를 텍스트의 아래로 지정값만큼 이동시킨다.  | 생략불가능  |
    | Vertical-offset  |  px  |  그림자를 텍스트의 아래로 지정값만큼 이동시킨다.  | 생략불가능  |
    | Blur-Radius  |  px  |  그림자의 흐림정도를 지정한다. 지정값만큼 그림자가 커지고 흐려진다.(양수)  | 생략가능  |
    | Spread  |  px  |  그림자를 더 크게 확장시킨다.(음수, 양수)  | 생략가능  |
    | Shadow-Color  |  color  |  그림자의 색상을 지정한다.  | 생략가능  |