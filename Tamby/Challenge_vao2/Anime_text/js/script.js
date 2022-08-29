/*mbola ts de misy inona akoury ato zao fa misaotra anao mba nitsidika xD */
const block_slide = document.querySelector(".slide-image");

const delay = block_slide.getAttribute("evodelays");

const nbreEnfant = block_slide.children;

let i = 0;
setInterval(() => {
  block_slide.children.item(i).classList.add("opacity");
  i++;
  if (i == nbreEnfant.length) {
    i = 0;
    for (let j = 0; j < nbreEnfant.length; j++) {
      block_slide.children.item(j).classList.remove("opacity");
    }
  }
}, 1000);
