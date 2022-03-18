//local storage
let mainColor=localStorage.getItem("color-option");
if(mainColor!==null){
    document.documentElement.style.setProperty('--main-color');
}
//spin icon
document.querySelector(".icon-container i").onclick = function(){
    //on icon to spin
    this.classList.toggle("fa-spin");
    //on setting option 
    document.querySelector(".setting-box").classList.toggle("open");
    
}


//switch colors 
const colorLi=document.querySelectorAll(".colors li");
//loop on all list elements
colorLi.forEach(li =>{
    li.addEventListener("click",(e)=>{
        //set color on root
        document.documentElement.style.setProperty('--main-color',localStorage.getItem("color-option"));

        //set color on local storage
        localStorage.setItem("color-option",e.target.dataset.color)
    });
});

// randomly change backgrounds
//select landing page element
let landingPage=document.querySelector(".landingpage");
//Get Array of images
let imagesArray=["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];

setInterval(function(){
//get random number
let randomNumber = Math.floor(Math.random() * imagesArray.length);
console.log(randomNumber);
//change background image url
landingPage.style.backgroundImage='url("images/'+imagesArray[randomNumber]+'")';

},10000)