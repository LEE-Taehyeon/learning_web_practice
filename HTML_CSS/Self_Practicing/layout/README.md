# CSS
------
1. layout
    - layout 이란 웹사이트를 구성하는 요소들을 배치할 공간을 불할하고 정렬하는 것이다. 공간을 분할할 때는 먼저 행을 구분한 후, 행 내부 요소를 분리하는 것이 일반적이다.
    1. Header & Navigation Bar
        - 대부분의 웹사이트는 Navigation Bar 를 가지고 있다. Navigation Bar 는 웹사이트의 필수 구성요소라고 할 수 있다.
        1. Navigation Bar
            - Navigation Bar 는 기본적으로 링크들의 리스트이다. 따라서 ul, li tag 를 이용하여 작성하는 것이 일반적이다.
        2. Section & Aside
            - 콘텐츠의 영역을 Section, 콘텐츠에 대한 Navigation item 이나 부가정보영역을 Aside 라고 한다.
            - Section 영역은 다시 article 영역으로 구분할 수 있다.
            - 이 두개의 영역은 float 프로퍼티를 사용하여 수평 정렬하는 것이 일반적이다.
        3. Footer
            - content-wrap 영역 다음에 footer 배치
            - footer 도 고정되어 있을 필요가 있지만 본문을 가리는 것은 곤란하다. 따라서 dixed 프로퍼티를 설정해서는 안된다.
            - footer 는 absolute 프로퍼티를 설정한다. absolute 를 사용하면 다른 요소가 먼저 위치를 점유하고 있어도 뒤로 밀리지 않고 덮어쓰게 된다.

2. 반응형 layout / Responsive Web Design
    1. view port
        - view port 란 웹페이지의 가시영역을 말한다. view port 는 디바이스에 따라 차이가 있다.
        - view port 를 이용하여 디바이스의 특성과 디바이스의 화면 크기 등을 고려하여 각종 디바이스 사용자에게 최적화된 웹페이지를 제공.
    2. @media
        - 이것은 서로 다른 미디어 타입(print, screen, ...)에 따라 각각의 styles 을 지정하는 것을 가능하게 한다.
        