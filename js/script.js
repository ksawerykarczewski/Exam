// -------------------------------------------  DETAILS*/

const template = document.querySelector("template").content;
const parent = document.querySelector("main");
const baseLink = "http://sansindesign.com/wp_kajetan/wp-json/wp/v2/"


/* -------------------- PROJECTS */

function loadAll() {
    fetch(baseLink + "project?_embed").then(e => e.json()).then(show);
}

function show(projects) {
    projects.forEach(project => {
        const clone = template.cloneNode(true);
        clone.querySelector(".year").textContent = project.project_year;
        clone.querySelector(".title").textContent = project.project_name;
        clone.querySelector("img").src = project._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url;
        clone.querySelector(".technique").textContent = "/ " + project.materialtechnique;

        /* -------------------- details */

        clone.querySelector("a").href = "details_2.html?id=" + project.id;

        /* -------------------- details end */

        parent.appendChild(clone);
    });

}
loadAll()

// -------------------------------------------  GET MODAL


function openNav() {
    document.getElementById("myNav").style.display = "block";
}

function closeNav() {
    document.getElementById("myNav").style.display = "none";
}


// ------------------------------------------------ HIDE NAVBAR WHILE SCROLLING

// Original code taken from W3SCHOOLS - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_hide_scroll

let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset + window.matchMedia("(min-width: 700px)");
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").classList.remove("opacity");

    } else {
        document.getElementById("navbar").style.top = "-110px";
        document.getElementById("navbar").classList.add("opacity");
    }
   prevScrollpos = currentScrollPos;
}

