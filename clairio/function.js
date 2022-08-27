const ratio=.1
const options = {
    root: null,
    rootMargin:'0px',
    threshold: .1
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > ratio) {
        entry.target.classList.add('reveal')
      }else{
        console.log('invisible')
      }
    });
}

const observer = new IntersectionObserver(handleIntersect, options); 
observer.observe(document.querySelector(".nav"))

