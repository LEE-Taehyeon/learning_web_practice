# Documents for WEB : HTML/CSS, JavaScript

1. Hoisting(호이스팅)
    - 어디에 선언했느냐에 상관없이 항상 제일 위로 선언을 끌어 올려주는 것.<br>
    
    ```
    console.log(foo); // 1. undefined
    var foo = 123;
    console.log(foo); // 2. 123
    {
        var foo = 456;
    }
    console.log(foo); // 3. 456
    ```
    설명)
    - 1. 에서 변수 foo 는 선언되지 않았으므로 undefined 출력 -> 다른 언어와 다르게 자바스크립트는 모든 선언문이 "호이스팅(Hoisting)" 되기 때문이다.
    - var 키워드로 선언된 변수는 선언단계와 초기화 단계가 한번에 이루어진다. 즉, scope 에 변수가 등록되고 변수는 메모리에 공간을 확보한 후 undefined 로 초기화 된다.
    - 따라서 변수 선엄눙 이전에 변수에 접근하여도 Varialbe Object 에 변수가 존재하기 때문에 에러가 발생하지 않는다. 다만 undefined 를 반환한다.
    - 이러한 현상을 변수 호이스팅(Variable Hoisting) 이라고 한다.
    
    <i> * JavaScript 에서 var 는 사용 안하는 게 좋다.</i>

2. `(백태그) 이용하여 string 값을 입력하는게 가독성이 더 좋다.
    ```
    console.log('value: ' + value);
    console.log(`value:  ${value}`); // 이렇게 작성하는 것이 더 좋다.
     ```
