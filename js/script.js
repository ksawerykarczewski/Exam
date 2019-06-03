// -------------------------------------------  FEATURED IMAGE

const template = document.querySelector("template").content;
const parent = document.querySelector("main");
const baseLink = "http://sansindesign.com/wp_kajetan/wp-json/wp/v2/"

/* -------------------- details */


//const urlParams = new URLSearchParams(window.location.search);
//const proID = urlParams.get("id");


/* -------------------- BIOS */

//function loadAll2() {
//    fetch(baseLink + "bio").then(e => e.json()).then(show2);
//}
//
//function show2(bios) {
//    bios.forEach(bio => {
//        const clone2 = document.getElementById("template_bios").cloneNode(true);
//        clone2.querySelector(".short-bio").textContent = bio.short_bio;
//        parent.appendChild(clone2);
//    });
//}
//
//loadAll2();

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
        clone.querySelector(".technique").textContent = project.materialtechnique;

        /* -------------------- details */

        clone.querySelector("a").href = "details.html?id=" + project.id;

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

let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").classList.remove("opacity");

    } else {
        document.getElementById("navbar").style.top = "-110px";
        document.getElementById("navbar").classList.add("opacity");
    }
    prevScrollpos = currentScrollPos;
}
