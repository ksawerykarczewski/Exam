// -------------------------------------------  FEATURED IMAGE

const template = document.querySelector("template").content;
const parent = document.querySelector("main");
const baseLink = "https://sansindesign.com/wp_kajetan/wp-json/wp/v2/"


/* -------------------- BIOS */


function loadAll() {
    fetch(baseLink + "bio?_embed").then(e => e.json()).then(show);
}

function show(projects) {
    projects.forEach(bio => {
        const clone = template.cloneNode(true);
        clone.querySelector(".long-bio-heading").textContent = bio.long_bio_heading;
        clone.querySelector(".long-bio").textContent = bio.long_bio;
        clone.querySelector(".long-bio-2").textContent = bio.long_bio_2;
//        clone.querySelector("img").src = bio._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url;
        parent.appendChild(clone);
    });

}
loadAll()

