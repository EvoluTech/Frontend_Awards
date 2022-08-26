const nouvellpp = document.querySelectorAll("main .secteur1 .left h6 .th1");
const evolutechText = document.querySelectorAll("main .secteur1 .left h6 .app");

convertSpan();

function convertSpan() {
  const text = nouvellpp.item("0").textContent.split("");
  nouvellpp.item("0").innerHTML = "";
  for (let i = 0; i < text.length; i++) {
    nouvellpp.item("0").innerHTML += `<span>${text[i]}</span>`;
  }
}

let sp = nouvellpp.item("0").children;

for (let j = 0; j < sp.length; j++) {
  nouvellpp
    .item("0")
    .children.item(j)
    .addEventListener("mouseover", (e) => {
      nouvellpp.item("0").children.item(j).style.color = "white";
      nouvellpp.item("0").children.item(j).style.fontSize = "1.5em";
      souris.classList = "souriscenter";
    });
  nouvellpp
    .item("0")
    .children.item(j)
    .addEventListener("mouseleave", (e) => {
      nouvellpp.item("0").children.item(j).style.color = "#2e3b41";
      souris.classList = "souris";
      nouvellpp.item("0").children.item(j).style.fontSize = "1em";
    });
}


evolutechText.item("0").addEventListener("mouseover", () => {
  souris.classList = "sourisplat";

  evolutechText.item("0").children.item("0").style.color = "white";
  evolutechText.item("0").classList="app-bg";
  
  evolutechText.item("0").style.color = "#EF6629";
  evolutechText.item("0").style.animation = "te 3s forwards";
  evolutechText.item("0").style.fontSize = "3.2em";
  evolutechText.item("0").style.transition = "all 0.5s ease";
  const zara=evolutechText.item("0").children.item("0").textContent.split("");
  evolutechText.item("0").children.item("0").innerHTML=""
  for (let i = 0; i < zara.length; i++) {
    evolutechText.item("0").children.item("0").innerHTML += `<span>${zara[i]}</span>`;
  }
  const zarasp=evolutechText.item("0").children.item('0').children.item("0");
  const zarasp1=evolutechText.item("0").children.item('0').children.item("1");
  const zarasp2=evolutechText.item("0").children.item('0').children.item("2");
  const zarasp3=evolutechText.item("0").children.item('0').children.item("3");
  
  zarasp.style.opacity = 0;
  zarasp1.style.opacity = 0;
  zarasp2.style.opacity = 0;
  zarasp3.style.opacity = 0;
  setTimeout(() => {
    zarasp.style.animation = "team 0.5s forwards linear 0s";
    zarasp1.style.animation = "team 1s forwards linear 0s";
    zarasp2.style.animation = "team 2s forwards linear 0s";
    zarasp3.style.animation = "team 3s forwards linear 0s";
  }, 100);

});
evolutechText.item("0").addEventListener("mouseleave", () => {
  souris.classList = "souris";
  evolutechText.item("0").style.color = "#5b6061";
  evolutechText.item("0").children.item("0").style.color = "#5b6061";
  evolutechText.item("0").style.fontSize = "2.6em";
  evolutechText.item("0").style.fontWeight = "500";
  evolutechText.item("0").style.animation = "";
  evolutechText.item("0").classList="app";
  const zarasp=evolutechText.item("0").children.item('0').children.item("0");
  const zarasp1=evolutechText.item("0").children.item('0').children.item("1");
  const zarasp2=evolutechText.item("0").children.item('0').children.item("2");
  const zarasp3=evolutechText.item("0").children.item('0').children.item("3");
  zarasp.style.animation = "";
  zarasp1.style.animation = "";
  zarasp2.style.animation = "";
  zarasp3.style.animation = "";
  zarasp.style.opacity = 1;
  zarasp1.style.opacity = 1;
  zarasp2.style.opacity = 1;
  zarasp3.style.opacity = 1;
});





