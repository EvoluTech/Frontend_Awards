/*sarahana fonctionnalité samy hafa xD*/

var t = document.querySelectorAll(".cardxD");
var img = document.querySelectorAll(".default");
var barre = document.querySelector(".barre");
var b_img= ["url('../Page/assets-leo/assassin.png')" , "url('../Page/assets-leo/fighter.png')","url('../Page/assets-leo/assassin.png')"]
var i=0;

//init img
for(var j=0;j<img.length;j++){
    img[j].style.backgroundImage=b_img[j];
}

//boucle infini des images xD
// setInterval(() => {
//     if(i==0){
//         img[i].style.animation="affichePerso 0.8s ease-in-out 0.5s forwards";
//     }
//     else if(i==img.length){
//         img[i-1].style.zIndex="-1";
//         i=0;
//         img[i].style.zIndex="2";
//         barre.style.animation="poseX 0.8s ease-in-out  forwards"
//         img[i].style.animation="affichePerso 0.8s ease-in-out 0.08s forwards";
//     }else{
        
//         img[i-1].style.zIndex="1";
//         img[i].style.zIndex="0";
//         img[i].style.width="500px";
//         barre.style.animation="poseX_rev 0.885s ease-in-out  forwards"
//         img[i-1].style.animation="reverseX 0.8s ease-in-out forwards";
//     }
//     i++
// }, 2000);


/*slide img*/
//a regler!!!

//recuperation valeur xD
var p0;
var n0;
var m0;
//nb rang placement xD
var p;
var n=img.length

//a regler
var next=document.querySelector(".arrow-p");
var prev=document.querySelector(".arrow-n");

//function initialisation value in tab xD
function init0(tabb){
  for(var i =0 ; i<n ;i++){
    tabb[i][p]=i;
    console.log("tabImg",i,tabb[i][p]);
  }
}
//misy blem eto xD
//boucle prev
//mampiova anazy xD
function previous(tab){
  
  for(var i = 0;i<n ; i++ ){
    if(tab[i][p]==0){
      //exp xD
        console.log('prev =0')
        //a regler xD
        tab[i].style.zIndex=""+(n)+"";
        tab[i].style.width="500px";
        tab[i].style.animation="";
        
    }
    tab[i][p]+=1;
    console.log("p",i,tab[i][p])
    }

  for(var i=0 ; i<n ; i++){
    if(tab[i][p]==n){
      //deb
      
      console.log('debut xD')
      tab[i][p]=0;
      tab[i].style.zIndex=""+(n)+"";
    }

  }
}

//init zIndex xD
function initZ(tab){
  for(var i=0 ; i<n;i++){
    tab[i].style.zIndex=""+i+"";
  }
}

//next function
//mampiova anazy xD
function nextxD(tab){
  for(var i = 0;i<n ; i++ ){
    
    console.log(tab[i].style.zIndex);
    if(tab[i][p]==0){
      //exp xD
      //A regler
        console.log('exp xD');
        tab[i].style.zIndex=""+n+"";
        barre.style.zIndex=""+n+1+"";

        tab[i].style.animation="reverseX 0.8s ease-in-out forwards";

    }
    tab[i][p]-=1;
    console.log("nb de p"+tab[i][p])
  }

  for(var i=0 ; i<n ; i++){
    if(tab[i][p]==-n){
      //deb
      console.log('debut xD')
      tab[i][p]=0;
    }

  }

}


//reset position xD

//affichage apres clic ou au debut xD
function init(tab,e){ 
  if(e=="prev"){
    for(var i = 0 ; i<n ;i++){
      if(tab[i][p]==0){
        //a regler xD
        tab[i].style.zIndex=""+(n+1)+"";
        //ato no misy bleme à regler xD
        tab[i].style.width="0px";
        tab[i].style.animation="affichePerso 0.8s ease-in-out 0.08s forwards";
      }
    }
  }else if(e=="next"){
    for(var i = 0 ; i<n ;i++){
      if(tab[i][p]==0){
        //A regler xD
        tab[i].style.zIndex=""+(i-1)+"";
        barre.style.animation="poseX 0.8s ease-in-out  forwards";
        tab[i].style.animation="affichePerso 0.001s ease-in-out 0.08s forwards";
      }
    }
  }

}
//***amboaro ito fa aza kamo2 xD!!! */
function barrexD(v){
  if(v=="prev"){
    barre.style.transform="";
    barre.style.animation="";
  }else if(v=="next"){
    barre.style.transform="";
    barre.style.animation="";
  }
}
var value;
var e="prev";

init0(t);
init0(img);
init(img,e);

//afaka ameliorena ny animation xD(genre plus fluide et plus concret xD)
/*prev arrow xD*/
prev.addEventListener("click" , function(){

  initZ(img)
  test=true;
  init_p(t);
  p_mini_nav(t);
  var e ="prev";
  previous(img);
  init(img,e);
  
  

})
/*next arrow*/
next.addEventListener("click", function(){
  initZ(img)
  test=false;
  init_n(t);
  p_mini_nav(t);
  var e="next"
  nextxD(img);
  init(img,e);
  
  

})
/*fin slide image */




/* debut mini-slide xD */




var prevs= document.querySelector(".arrow-prev");
var nexts = document.querySelector(".arrow-next");

      //manao verif(n-1) p--> existence de 1 pour n xD sinon -1 pour p --> -n-1 pour n
      var test = true ;


    //réarrangement minislide xD
      function p_mini_nav(tab){
        
        for (var i =0 ; i<n ; i++){
          //rendre invisible xD
          tab[i].style.opacity="0";
          //prev
          if(test==true){

            if(tab[i][p]==(n-1) || tab[i][p]==-1){ 

              tab[i].classList.add("prev");
              tab[i].style.opacity="1";
              tab[i].style.animation="anim-p 0.3s ease-in-out  forwards";
            }
            //next
            else if(tab[i][p] == 1){
              tab[i].classList.add("next");
              tab[i].style.opacity="1";
              //tab[i].style.transform="translateX(105%)";
              tab[i].style.animation="anim-n 0.3s ease-in-out  forwards"

            }else if(tab[i][p] == 0){
              tab[i].classList.add("mid");
              //tab[i].style.transform="translateX(0%)";
              tab[i].style.opacity="1";
              tab[i].style.animation="anim-m 0.3s ease-in-out  forwards"
            }
          }else{
            
          
            if(tab[i][p]==-1 ){ 

              tab[i].classList.add("prev");
              tab[i].style.opacity="1";
              tab[i].style.animation="anim-p 0.3s ease-in-out  forwards";
            }
            else if( ( tab[n-1][p]!=-n+1 && (tab[i][p] == 1) || tab[i][p]==(-n+1))){
              tab[i].classList.add("next");
              tab[i].style.opacity="1";
              //tab[i].style.transform="translateX(105%)";
              tab[i].style.animation="anim-n 0.3s ease-in-out  forwards"
            }
            else if(tab[i][p] == 0){
              tab[i].classList.add("mid");
              //tab[i].style.transform="translateX(0%)";
              tab[i].style.opacity="1";
              tab[i].style.animation="anim-m 0.3s ease-in-out  forwards";
            }
          }
          console.log("tab ",i,tab[i][p])
        }
      
      }
      
      p_mini_nav(t);
      
      //prev mini_slide 
      //testena asiana class hafa mihits ireo liste tsirairay xD de aztao .classList.add sy remove reny xD
      //mbola ts synchro ilay event ts miova mihits xD
      //misy blem ilay iteration xD
      p0=document.querySelector(".prev");
      n0=document.querySelector(".next");
      m0=document.querySelector(".mid");
      

      //initiation prev mini-slide xD
      function init_p(t){
        p0.classList.remove("prev");
        n0.classList.remove("next");
        m0.classList.remove("mid");
        for(var i = 0 ; i<n ; i++){
          t[i][p]+=1;
          if(t[i][p]==n){
            t[i][p]=0;
          }
        }
      }

      prevs.onclick = function(){
        //slide haut prev
        initZ(img)
        var e ="prev";
        previous(img);
        init(img,e);


        test=true;
        //faut rendre tout ç en tant que fonction xD 
        //A regler  cause p0 doesn't change xD

        init_p(t);
        p_mini_nav(t);
        console.log(document.querySelector(".next"));
        console.log("prevv clicked xD");
      };
      
      function init_n(t){
        for(var i = 0 ; i<n ; i++){
          t[i][p]-=1;
          if(t[i][p]==-n){
            t[i][p]=0;
          }
          console.log("tp",i,t[i][p])
        }
      }


       //next mini_slide
       nexts.onclick= () =>{
        initZ(img)
        //slide haut next xD
        var e="next"
        nextxD(img);
        init(img,e);
        test=false;
        test=false;
        //faut rendre tout ç en tant que fonction xD 
        init_n(t);
        p_mini_nav(t);
        console.log(document.querySelector(".prev"));
        console.log("next clicked xD");
       }
    /* fin mini-slide */