// -------------------------------------------  FEATURED IMAGE

const template = document.querySelector("template").content;
const parent = document.querySelector("main");
const baseLink = "http://sansindesign.com/wp_kajetan/wp-json/wp/v2/"

function loadAll() {
    fetch(baseLink + "project?_embed").then(e => e.json()).then(show);
}

function show(projects) {
    projects.forEach(project => {
        const clone = template.cloneNode(true);
        clone.querySelector(".year").textContent = project.project_year;
        clone.querySelector(".title").textContent = project.project_name;
        clone.querySelector("img").src = project._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
        clone.querySelector(".technique").textContent = project.materialtechnique;
        parent.appendChild(clone);
    });
}
loadAll()
