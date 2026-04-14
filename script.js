// SCROLL DOWN
function scrollDown() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });
}

// REVEAL EFFECT
window.addEventListener("scroll", function() {
    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach(el => {
        let position = el.getBoundingClientRect().top;
        let screen = window.innerHeight;

        if(position < screen - 100) {
            el.classList.add("active");
        }
    });
});

// COUNT NUMBER
let numbers = document.querySelectorAll(".number");

numbers.forEach(num => {
    let update = () => {
        let target = +num.getAttribute("data-target");
        let current = +num.innerText;

        let increment = target / 100;

        if(current < target) {
            num.innerText = Math.ceil(current + increment);
            setTimeout(update, 20);
        } else {
            num.innerText = target;
        }
    };
    update();
});

// TẠO HẠT BAY
let container = document.getElementById("particles");

for (let i = 0; i < 50; i++) {
    let p = document.createElement("div");
    p.classList.add("particle");

    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (5 + Math.random() * 5) + "s";
    p.style.opacity = Math.random();

    container.appendChild(p);
}

function openImage(img) {
    document.getElementById("imgModal").style.display = "block";
    document.getElementById("modalImg").src = img.src;
}

function closeImage() {
    document.getElementById("imgModal").style.display = "none";
}