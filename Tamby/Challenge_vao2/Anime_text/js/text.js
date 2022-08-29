const text_animes = document.querySelectorAll(".text-anime");
// console.log(text_animes)

function funanime(params) {
  const text = params.textContent; //maka anilay soratra ao anaitny class .text-anime
  let speed = params.getAttribute("evospeed");
  let delay = params.getAttribute("evodelay");
  if (speed == null) {
    speed = 120;
  }
  if (delay == null) {
    delay = 0;
  }
  convertSpan(params);

  setTimeout(() => {
    var idSpan = "0";
    function animation() {
      const span = params.querySelectorAll("span")[idSpan]; //Maka anilay span efa mizara2
      span.classList.add("fade");
      idSpan++;
      if (idSpan == text.length) {
        clearInterval(interavl);
      }
    }
    let interavl = setInterval(animation, speed);
  }, delay); //delay ny fisehony tsirairay (delay=0 s'il y a pas de delay sur la balise)
}
text_animes.forEach(funanime);

const cligniote = document.querySelectorAll(".cligniote");
