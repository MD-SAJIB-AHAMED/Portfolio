document.addEventListener('DOMContentLoaded', function () { // Typing Effect const heroText = document.querySelector('.hero h1'); const textArray = []; const hours = new Date().getHours(); if (hours < 12) { textArray.push("Good Morning"); } else if (hours < 18) { textArray.push("Good Afternoon"); } else { textArray.push("Good Evening"); } // Add additional texts textArray.push("Welcome to My Developer Portfolio", "Exploring the intersection of code and creativity.", "Building the future with code."); let textIndex = 0; let charIndex = 0; function typeText() { if (charIndex < textArray[textIndex].length) { heroText.textContent += textArray[textIndex].charAt(charIndex); charIndex++; setTimeout(typeText, 100); } else { setTimeout(eraseText, 2000); } } function eraseText() { if (charIndex > 0) { heroText.textContent = textArray[textIndex].substring(0, charIndex - 1); charIndex--; setTimeout(eraseText, 50); } else { textIndex = (textIndex + 1) % textArray.length; setTimeout(typeText, 500); } } setTimeout(typeText, 500); // Smooth Scroll const scrollLinks = document.querySelectorAll('a[href^="#"]'); scrollLinks.forEach(link => { link.addEventListener('click', function (e) { e.preventDefault(); const targetId = this.getAttribute('href'); document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' }); });
function scrollToProjects(){
document.querySelector("#projects").scrollIntoView({
behavior:"smooth"
});
}

const projects = document.querySelectorAll(".project-card");

projects.forEach(card=>{
card.addEventListener("click",()=>{
let title = card.querySelector("h3").innerText;
let desc = card.querySelector("p").innerText;
let link = card.querySelector("a").href;

let detailsBox = document.getElementById("project-details");

detailsBox.innerHTML = &lt;h2&gt;&gt; ${title}</h2>
<p>${desc}&lt;/p&gt; &lt;a href="${link}" target="_blank"&gt;&gt; Open Project&lt;/a&gt;;

detailsBox.style.display="block";
});
});

 }); });