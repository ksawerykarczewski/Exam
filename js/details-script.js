// -------------------------------------------  DETAILS

let baseLink = "http://sansindesign.com/wp_kajetan/wp-json/wp/v2/project/";

const urlParams = new URLSearchParams(window.location.search);

const projectID = urlParams.get("id");

const template = document.querySelector("template").content;

const parent = document.querySelector("main");

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
        let image = document.createElement('img');
        image.classList.add('project-image');
        image.src = data.image[i].guid;
        clone.appendChild(image);
    }

    // append to DOM

    parent.appendChild(clone);
}



//    document.querySelector(".title").textContent = data.project_name;
//    document.querySelector(".long-description").textContent = data.description;

//    for (let i = 0; i < data.image.length; i++) {
//        document.querySelector("img").src = data.image[i].guid;
//    }

//    for (let i = 0; i < data.image.length; i++) {
//        let image = document.createElement('img');
//        image.classList.add('project-image');
//        image.src = data.image[i].guid;
//        document.appendChild(image);
//    }


/* -------------------- GALLERY */
//
//var slideIndex = 1;
//showSlides(slideIndex);
//
//function plusSlides(n) {
//    showSlides(slideIndex += n);
//}
//
//function currentSlide(n) {
//    showSlides(slideIndex = n);
//}
//
//function showSlides(n) {
//    var i;
//    var slides = document.getElementsByClassName("mySlides");
//    var dots = document.getElementsByClassName("dot");
//    if (n > slides.length) {
//        slideIndex = 1
//    }
//    if (n < 1) {
//        slideIndex = slides.length
//    }
//    for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//    }
//    for (i = 0; i < dots.length; i++) {
//        dots[i].className = dots[i].className.replace(" active", "");
//    }
//    slides[slideIndex - 1].style.display = "block";
//    dots[slideIndex - 1].className += " active";
//}
