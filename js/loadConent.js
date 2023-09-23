PARAMETER = "page";

window.onload = function() {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementById("svgFavicon").setAttribute("href", "img/SchiibeChloepfer_Logo_raw_wt_Logo.svg");
        document.getElementById("icoFavicon").setAttribute("href", "img/SchiibeChloepfer_Logo_raw_wt_Logo.ico");
    }

    const url = new URL(window.location);

    sub = url.searchParams.get(PARAMETER);
    if(sub != null) {
        load_content(sub);
    }
    else {
        load_content("home");
    }
};

function load_content(filename) {
    let file = "html/" + filename + ".html"
    fetch (file)
    .then(x => x.text())
    .then(y => document.getElementById("content").innerHTML = y);
    const url = new URL(window.location);
    url.searchParams.set(PARAMETER, filename);
    window.history.pushState(null, '', url.toString());
    document.getElementById("checkbox_toggle").checked = false;
}
