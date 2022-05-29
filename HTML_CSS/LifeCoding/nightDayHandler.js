var Body = {
    setAllClassValue : function (classHandler, value) {
        for(var i = 0; i < classHandler.length; i++) {
            classHandler[i].value = value;
        }
    },
    setTagColor : function (selector, color) {
        var a_list = document.querySelectorAll(selector);
            for(var i = 0; i < a_list.length; i++) {
                a_list[i].style.color = color;
            }
    },
    setBodyColor : function (target, color, backColor) {
        target.style.color = color;
        target.style.backgroundColor = backColor;
    },
    setFontSize : function (className, size) {
        var li_list = document.querySelectorAll(className);
        for(var i = 0; i < li_list.length; i++) {
            li_list[i].style.fontSize = size;
        }
    }
}

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