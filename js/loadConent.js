window.onload = function() {
    load_content("home");
    /*menu = document.getElementById('menu');
    menu.style.visibility = "visible";
    menuCheckbox = document.getElementById('checkbox_toggle');
    menuCheckbox.checked = false;
    menuCheckbox.addEventListener('change', (event) => {
        if(event.currentTarget.checked) {
            menu.style.visibility = "visible";
        }
        else {
            menu.style.visibility = "hidden";
        }
    });*/
};

function load_content(filename) {
    let file = "html/" + filename + ".html"
    fetch (file)
    .then(x => x.text())
    .then(y => document.getElementById("content").innerHTML = y);
    document.getElementById("checkbox_toggle").checked = false;
}