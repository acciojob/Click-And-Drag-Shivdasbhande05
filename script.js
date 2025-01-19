const itemsConatiner = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

//When mouse down we need to track initial position
itemsConatiner.addEventListener("mousedown",(e) => {
    //console.log("Mousedown event triggered");
    isDown = true;
    startX = e.pageX - itemsConatiner.offsetLeft;
    scrollLeft = itemsConatiner.scrollLeft;
    itemsConatiner.classList.add("active");

    setTimeout(() => {
        itemsConatiner.dispatchEvent(new MouseEvent("mousemove" , {
            view : window,
            bubbles : true,
            canelable : true,
            clinetX : 200,
            clientY : 100,
        }))
    },1000);
});

//when mouse is up we need to stop tracking
itemsConatiner.addEventListener("mouseup", () => {
    //console.log("Mouseup Event Triggered");
    isDown = false;
    itemsConatiner.classList.remove("active");
});

//when mouse leave we need to stop tracking
itemsConatiner.addEventListener("mouseleave" , () =>{
    //console.log("Mouleave Event Triggerd");
    isDown = false;
    itemsConatiner.classList.remove("active");  
});

// when mouse is moving we need to adjust scroll position
itemsConatiner.addEventListener("mousemove", (e) => {
    //console.log("Mousemove Event Triggered");
    if(!isDown){
        return;
    }

    e.preventDefault();

    const x = e.pageX - itemsConatiner.offsetLeft;
    const wallk = (x-startX) * 2;// 
    itemsConatiner.scrollLeft = scrollLeft-wallk;

    setTimeout(()=>{
        itemsConatiner.dispatchEvent(new MouseEvent("mouseup",{
            view : window,
            bubbles : true,
            cancelable : true
        }));
    },1000);
});