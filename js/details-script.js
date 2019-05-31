// -------------------------------------------  DETAILS

let baseLink = "http://sansindesign.com/wp_kajetan/wp-json/wp/v2/project/";

const urlParams = new URLSearchParams(window.location.search);

const projectID = urlParams.get("id");

console.log(projectID);

fetch(baseLink + projectID + "?_embed").then(e => e.json()).then(showProject);

function showProject(data) {
    document.querySelector(".year").textContent = data.project_year;
    document.querySelector(".title").textContent = data.project_name;
    document.querySelector(".long-description").textContent = data.description;

    for (let i = 0; i < data.image.length; i++) {

        document.querySelector("img").src = data.image[i].guid;

    }

}

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
