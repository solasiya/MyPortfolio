function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}


// Typewriter Effect
const texts = [
    "DEVELOPER",
    "DESIGNER",
    "CONSERVATIONIST"
];

let speed = 100;
let textIndex = 0;
let charIndex = 0;

function typeWriter() {
    const textElements = document.querySelector(".typewriter-text");
    if (charIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000); 
    }
}

function eraseText() {
    const textElements = document.querySelector(".typewriter-text");
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);  
    } else {
        textIndex = (textIndex + 1) % texts.length;  
        charIndex = 0;
        setTimeout(typeWriter, 500);  
    }
}

window.onload = function() {
    typeWriter();
};