// -------------------------------------------  DETAILS

let baseLink = "https://sansindesign.com/wp_kajetan/wp-json/wp/v2/project/";

const urlParams = new URLSearchParams(window.location.search);

const projectID = urlParams.get("id");

const template = document.querySelector("#description-box").content;

const parent = document.querySelector("main");

const parent_gallery = document.querySelector(".image-list");

//const parent = document.querySelector("main");

console.log(projectID);

fetch(baseLink + projectID + "?_embed").then(e => e.json()).then(showProject);

function showProject(data) {

    // clone the template

    const clone = template.cloneNode(true);

    // populate it

    const year = clone.querySelector(".year");
    const title = clone.querySelector(".title");
    const description = clone.querySelector(".long-description");


    year.textContent = data.project_year;
    title.textContent = data.project_name;
    description.textContent = data.description;

    for (let i = 0; i < data.image.length; i++) {
        console.log(data.image[i])

        parent_gallery.innerHTML += `<div class="column">
                <img src="${data.image[i].guid}" alt="Nature" onclick="myFunction(this);">
            </div>`;


//        let image = document.createElement('img');
//        image.classList.add('project-image');
//        image.src = data.image[i].guid;
//        clone.appendChild(image);

    }

    var expandImg = document.getElementById("expandedImg");
    expandImg.src = data.image[0].guid
    // append to DOM

    parent.appendChild(clone);
}


// ------------------------------------------------ GALLERY

function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
}


