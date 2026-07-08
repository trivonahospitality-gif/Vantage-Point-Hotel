alert("JS Loaded");
console.log("Website Loaded Successfully");
const slides = document.querySelectorAll(".slide");

let current = 0;

function changeSlide(){

    slides[current].classList.remove("active");

    current++;

    if(current >= slides.length){
        current = 0;
    }

    slides[current].classList.add("active");

}

setInterval(changeSlide,4000);
const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.getElementById("close");

galleryImages.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=image.src;

});

});

closeBtn.addEventListener("click",()=>{

lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

});
document.getElementById("bookingForm").addEventListener("submit", function(e){

    e.preventDefault();

    const name=document.getElementById("name").value;
    const phone=document.getElementById("phone").value;
    const checkin=document.getElementById("checkin").value;
    const checkout=document.getElementById("checkout").value;
    const room=document.getElementById("room").value;
    const guests=document.getElementById("guests").value;

    const message=
`Hello Vantage Point Hotel & Resort,

I would like to book a room.

Name: ${name}

Mobile: ${phone}

Room Type: ${room}

Check-In: ${checkin}

Check-Out: ${checkout}

Guests: ${guests}

Please share the availability and best price.`;

    const url=`https://wa.me/919580924716?text=${encodeURIComponent(message)}`;

    window.open(url,"_blank");

});
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}
const topBtn = document.getElementById("topBtn");

if (topBtn) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            }, 500);

        }, 1500);
    }
});
// Navbar Scroll Effect

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

});
