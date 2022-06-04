const click = document.getElementById("click_btn");
const beforeClickBgColor = "blue";
const afterClickBgColor = "red";

let btn = true;

click.addEventListener("click", btnClick)

function btnClick(event) {
    if (btn) {
        btn = false;
        click.innerHTML = "Revert";
        click.style.backgroundColor = afterClickBgColor;
    } else {
        btn = true;
        click.innerHTML = "Click";
        click.style.backgroundColor = beforeClickBgColor;
    }
}
