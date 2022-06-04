const click = document.getElementById("click_btn");
const beforeClickColor = "blue";
const afterClickColor = "red";

let btn = true;

click.addEventListener("click", btnClick)

function btnClick(event) {
    if (btn) {
        btn = false;
        click.innerHTML = "Revert";
        click.style.backgroundColor = afterClickColor;
        click.style.border = afterClickColor;
    } else {
        btn = true;
        click.innerHTML = "Click";
        click.style.backgroundColor = beforeClickColor;
        click.style.border = beforeClickColor;
    }
}
