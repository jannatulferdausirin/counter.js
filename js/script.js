// jQuery(document).ready(function($) {
//     $('.counter').counterUp({
//         delay: 10,
//         time: 1000
//     });
// });
// row counterUp======
// let counterUp = document.querySelector('.counterUp');

// let counter = 0;

// function count(){
//     counter ++
//     // console.log(counter);
//     counterUp.innerHTML = counter;
//     if (counter == counterUp.dataset.number)
//     clearInterval(stop);

// }

// let stop = setInterval(function(){
//     count()
// }, 1000);
// ==========2nd try====================
// let counterUp = document.querySelector('.counterUp');

// counter = 0 ;

// function count(){
//     counter++
//     counterUp.innerHTML = counter;
//     if( counter == counterUp.dataset.number){
//         clearInterval(stop);
//     }
   

// }

// let stop = setInterval (function (){
//     count()
// }, 1000)
// 3rd try===============
//  let jogfolUp = document.querySelector('.counterUp');

//  let jogfol = 0;

//  function jog (){
//     jogfol++
//     jogfolUp.innerHTML=jogfol;
//     // console.log(jogfol);
//     if (jogfol == jogfolUp.dataset.number){
//      clearInterval(bondho);
//     }

//  }
//  let bondho = setInterval (function  (){
//         jog()
//  },100)
 
// 4th times try============
// let counterUp =document.querySelector('.counterUp');
// let number = counterUp.dataset.number;
// let speed = counterUp.dataset.speed;
// let counter = 0 ;

// function count (){
//     counter++
//     counterUp.innerHTML = counter;
//     if (counter == number){
//         clearInterval(stop);
//     }
// }

// let stop = setInterval(function () {
//     count()
// },speed);

// select all try 1========










// 2nd times try all==========
let counterUp = document.querySelectorAll('.counterUp');
let arr = Array.from(counterUp);

arr.map((item)=>{
    let counter=0;
    // let number= item.dataset.number;
    function count(){
        counter++
        item.innerHTML=counter;
        if(counter==item.dataset.number){
            clearInterval(stop)
        }
    }
    let stop = setInterval(function(){
        count()
    },1000/item.dataset.number)
})
