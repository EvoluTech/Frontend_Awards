const ratio=.1
const io = document.querySelector('.nav')
const h1= document.querySelector('.titre h1')
const p1= document.querySelector('.titre p')
const mio= document.querySelector('.card2 img')
const options = {
    root: null,
    rootMargin:'0px',
    threshold: .1
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
      console.log(entry.intersectionRatio)
      if (entry.intersectionRatio > ratio) {
        io.classList.add('reveal')
        h1.classList.add('reveal-verse')
        p1.classList.add('reveal-inverse')
        observer.unobserve(entry.target)
      }
    });

}

const observer = new IntersectionObserver(handleIntersect, options); 
observer.observe(document.querySelector(".nav"))

const rotationSec2 = function (entries, sec2obs) {
  entries.forEach(function (entry) {
    console.log(entry.intersectionRatio)
    if (entry.intersectionRatio > ratio) {
     mio.classList.add('miodina')
      sec2obs.unobserve(entry.target)
    }
  });

}

const sec2obs = new IntersectionObserver(rotationSec2, options); 
sec2obs.observe(document.querySelector(".card2 img"))


