const menu = document.getElementById("menu");
var flag = 0;
const dropdown = document.getElementById('dropdown-content');
menu.addEventListener('click', function () {
    if (flag == 0) {
        dropdown.style.display = "block";
        flag = 1;
    }
    else {
        dropdown.style.display = "none";
        flag = 0;
    }
})

window.onclick = function (e) {
    if (e.target!=menu || e.target!=modal) {
        dropdown.style.display = "none";
        modal.style.display="none"
        flag = 0;
        flag1=0;
    }
}



