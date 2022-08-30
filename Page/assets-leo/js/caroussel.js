// var imgC = document.querySelectorAll('.imgCaroussel');
// var urlImg = [];
// //init img
// for(var j=0;j<imgC.length;j++){
//     imgC[j].style.backgroundImage=urlImg[j];
// }

// //boucle infini des images xD
// setInterval(() => {
//     if(i==0){
//         imgC[i].style.animation="affichePerso 0.8s ease-in-out 0.5s forwards";
//     }
//     else if(i==imgC.length){
//         imgC[i-1].style.zIndex="-1";
//         i=0;
//         imgC[i].style.zIndex="2";
//         //anim
//         barre.style.animation="poseX 0.8s ease-in-out  forwards"
//         imgC[i].style.animation="affichePerso 0.8s ease-in-out 0.08s forwards";
//     }else{
        
//         imgC[i-1].style.zIndex="1";
//         imgC[i].style.zIndex="0";
//         imgC[i].style.width="500px";
//         //anim
//         barre.style.animation="poseX_rev 0.885s ease-in-out  forwards"
//         imgC[i-1].style.animation="reverseX 0.8s ease-in-out forwards";
//     }
//     i++
// }, 2000);