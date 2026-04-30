const cards = document.querySelectorAll(".project-card");
const modal = document.getElementById("modal");

cards.forEach(card=>{
card.addEventListener("click",()=>{
document.getElementById("modal-title").innerText = card.dataset.title;
document.getElementById("modal-desc").innerText = card.dataset.desc;
document.getElementById("modal-link").href = card.dataset.link;

modal.style.display = "flex";
});
});

document.getElementById("close").onclick = ()=>{
modal.style.display="none";
};

window.onclick = (e)=>{
if(e.target == modal){
modal.style.display="none";
}
};