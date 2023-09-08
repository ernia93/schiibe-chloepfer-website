window.onload = function() {load_content("home")};

function load_content(filename) {
    let file = "html/" + filename + ".html"
    fetch (file)
    .then(x => x.text())
    .then(y => document.getElementById("content").innerHTML = y);
}