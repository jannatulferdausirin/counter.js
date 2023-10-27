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
