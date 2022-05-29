// jQuery 를 이용하면 반복문을 사용하지 않아도 된다.

var Body = {
    setAllClassValue : function (classHandler, value) {
        $(classHandler).val(value);
    },
    setTagColor : function (selector, color) {
        // var a_list = document.querySelectorAll(selector);
        // for(var i = 0; i < a_list.length; i++) {
        //     a_list[i].style.color = color;
        // }
        // 위 코드를 jQuery(:JavaScript 라이브러리) 를 이용하여 다음과 같이 수정할 수 있다.
        $(selector).css('color', color);
        // $() : 그냥 이름이 $ 인 함수 그 자체(jQuery) 즉, $() 는 $ 함수를 호출한 것이라고 할 수 있다.
        // window.jQuery = window.$ = jQuery;
        //$('div') = jQuery('div') 동일한 의미의 코드이다.
    },
    setBodyColor : function (target, color, backColor) {
        $(target).css('color', color);
        $(target).css('background-color', backColor);
    },
    setFontSize : function (className, size) {
        $(className).css('font-size', size);
    }
}
/*
    document / DOM / window / ajax / cookie / offline web application / webRTC / speech / webGL / webVR / ...
*/

function nightDayHandler(self) {
    var target = document.querySelector('body');
    var classHandler = document.querySelectorAll('.nightDayHandlerClass');

    if (self.value === 'night') {
        Body.setBodyColor(target, 'white', 'black');
        Body.setAllClassValue(classHandler, 'day');
        Body.setTagColor('a', 'yellow');
        Body.setFontSize('.font_size_change', '50px');
    } else {
        Body.setBodyColor(target, 'black', 'white');
        Body.setAllClassValue(classHandler, 'night');
        Body.setTagColor('a', 'blue');
        Body.setFontSize('.font_size_change', '15px');
    }
}