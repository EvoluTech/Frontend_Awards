const champSouris = document.querySelector(".block-souris");
const souris = document.querySelector(".souris");
const text_zoom = document.querySelectorAll(".text-zoom");

window.addEventListener("mousemove", funSouris);



function funSouris(e) {
  souris.style.top = e.clientY + "px";
  souris.style.left = e.clientX + "px";
}

champSouris.addEventListener("mouseover", activeSouris);//Activena rehefa tafiditra anaty div
champSouris.addEventListener("mouseleave", desactiveSouris);//Desactivena refa tafala tao anaty div

for (let i = 0; i < text_zoom.length; i++) {
  convertSpans(i);
}

function convertSpans(j) {
  const text = text_zoom.item(j).textContent

  text_zoom.item(j).innerHTML = "";
  for (let i = 0; i < text.length; i++) {
    text_zoom.item(j).innerHTML += `<span class="">${text[i]}</span>`;
  }
}

text_zoom.forEach((element) => {
  let span = element.textContent.split("");
  for (let i = 0; i < text_zoom.length; i++) {
    for (let j = 0; j < span.length; j++) {
      element.children.item(j).addEventListener("mouseover", (e) => {
        element.children.item(j).classList="tsotra"
        // element.children.item(j).style.color = "white";
        souris.classList = "sourisZoom";
      });
      element.children.item(j).addEventListener("mouseleave", (e) => {
        element.children.item(j).classList="tsotra-normale"

        souris.classList = "souris";
      });
    }
  }
});

function activeSouris() {
  souris.style.opacity = "1";
  champSouris.style.cursor = "none";
}

function desactiveSouris() {
  souris.style.opacity = "0";
}
