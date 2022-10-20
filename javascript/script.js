// declare const variable
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const  collaspe =document.getElementById("collaspe")
// declare dropdown fuction
hamburger.addEventListener('click' , dropdown);
// function for drop down
function dropdown() {
    // let height = menu.style.height;
    console.log("clicked");
    // console.log(height)
   
    if( menu.style.height != '0px'){ 
        menu.style.height = '0px'
    }
    else{
       menu.style.height = '200px'
    }
  
}