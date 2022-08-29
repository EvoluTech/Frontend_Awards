// fonction generale qui conv texte dans une div ou autre (Tsy mety raha vao class na div bebd)
function convertSpan(parent) {
  const text = parent.textContent;
  parent.innerHTML = "";
  for (let i = 0; i < text.length; i++) {
    parent.innerHTML += `<span>${text[i]}</span>`;
    if (text[i] == " ") {
      parent.innerHTML += " ";
    }
  }
}
 