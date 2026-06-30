// ==========================
// Sticky Navbar
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 60){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});


// ==========================
// Hero Animation
// ==========================

window.addEventListener("load",()=>{

    document.querySelector(".hero-content").classList.add("show");

});

/*==========================
Animated Counters
==========================*/

const counters = document.querySelectorAll(".counter");

const speed = 200;

const startCounters = () => {

    counters.forEach(counter => {

        const update = () => {

            const target = +counter.dataset.target;

            const count = +counter.innerText;

            const increment = Math.ceil(target / speed);

            if(count < target){

                counter.innerText = count + increment;

                setTimeout(update,10);

            }else{

                counter.innerText = target;

            }

        }

        update();

    });

}

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

startCounters();

observer.disconnect();

}

})

})

observer.observe(document.querySelector(".stats"));

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;
        const sectionTop = section.getBoundingClientRect().top;
        const revealPoint = 120;

        if(sectionTop < windowHeight - revealPoint){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const menuOverlay = document.querySelector(".menu-overlay");
const icon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");
    menuOverlay.classList.toggle("active");

    if(navLinks.classList.contains("active")){

        icon.classList.replace("fa-bars","fa-xmark");

    }else{

        icon.classList.replace("fa-xmark","fa-bars");

    }

});

menuOverlay.addEventListener("click",()=>{

    navLinks.classList.remove("active");
    menuOverlay.classList.remove("active");

    icon.classList.replace("fa-xmark","fa-bars");

});

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");
        menuOverlay.classList.remove("active");

        icon.classList.replace("fa-xmark","fa-bars");

    });

});
