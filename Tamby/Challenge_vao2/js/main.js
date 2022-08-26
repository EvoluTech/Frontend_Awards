const souris = document.querySelector(".souris");
const nav = document.querySelectorAll(".nav-links li");
const a = document.querySelectorAll(".nav-links li a");
window.addEventListener("mousemove", curseur);

function curseur(e) {
  souris.style.top = e.pageY + "px";
  souris.style.left = e.pageX + "px";
}

for (let i = 0; i < a.length; i++) {
  convertSpan(i);
}
function convertSpan(j) {
  const text = a.item(j).textContent.split("");
  a.item(j).innerHTML = "";
  for (let i = 0; i < text.length; i++) {
    a.item(j).innerHTML += `<span class="">${text[i]}</span>`;
  }
}

a.forEach((menu) => {
  let sp = menu.textContent.split("");
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < sp.length; j++) {
      menu.children.item(j).addEventListener("mouseover", (e) => {
        menu.children.item(j).style.fontSize = "1.5em";
        menu.children.item(j).style.color = "white";
        souris.classList = "sourisbr";
        // console.log(e)
        // console.log(e.path["1"].className);
      });
      menu.children.item(j).addEventListener("mouseleave", (e) => {
        menu.children.item(j).style.fontSize = "1em";
        souris.classList = "souris";
        if (e.path["1"].className == "active") {
          menu.children.item(j).style.color = "#f99b28";
        } else {
          menu.children.item(j).style.color = "#273036";
        }
      });
    }
  }
});
