const itemsConatiner = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

//When mouse down we need to track initial position
itemsConatiner.addEventListener("mousedown",(e) => {
    isDown = true;
    startX = e.pageX - itemsConatiner.offsetLeft;
    scrollLeft = itemsConatiner.scrollLeft;
    itemsConatiner.classList.add("active");
});

//when mouse is up we need to stop tracking
itemsConatiner.addEventListener("mouseup" ,() => {
    isDown = false;
    itemsConatiner.classList.remove("active");
});

//when mouse leave we need to stop tracking
itemsConatiner.addEventListener("mouseleave" , () =>{
    isDown = false;
    itemsConatiner.classList.remove("active");  
});

// when mouse is moving we need to adjust scroll position
itemsConatiner.addEventListener("mousemove", (e) => {
    if(!isDown){
        return;
    }

    e.preventDefault();

    const x = e.pageX - itemsConatiner.offsetLeft;
    const wallk = (x-startX) * 2;// 
    itemsConatiner.scrollLeft = scrollLeft-wallk;
});