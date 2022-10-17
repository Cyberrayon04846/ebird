console.log(`this is script.js`);
// async function fetchnews() {
//     // console.log(input);

// let response = await fetch(
//   `/data/data.json`
// );
// let user = await response.json();
// return user;
// }

// let news = fetchnews();
// news.then((data) => {
//     console.log(data.birdName)

//     data.forEach(element => {
//         console.log(element.birdName)
//     });
// })
let hamburger = document.getElementById('hamburger');
let menu = document.getElementById('menu');
console.log(hamburger)

hamburger.addEventListener('click' , dropdown);

function dropdown() {
    // let height = menu.style.height;
    console.log("clicked");
    // console.log(height)
   
    if( menu.style.display != 'none'){ 
        menu.style.display = 'none'
    }
    else{
       menu.style.display = 'block'
    }
}