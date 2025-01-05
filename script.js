// Your code here.
let pElements = document.getElementByClass("items");
let parentElement = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

parentElement.eventListener('mousedown', (e) =>{
	isDown = true;
	pElements.classList.add("active");
	startX = e.pageX - pElements.offSetLeft;
	scrollLeft = e.scrollLeft;
});

parentElement.eventListener('mouseup', 'mouseleave' , (e) => {
	isDown = false;
	pElements.classList.remove("active");
});

parentElement.eventListener('mousemove', (e) =>{
	if(!isDown) return;
	e.preventDefault();
	const ex = e.pageX - pElements.offSetLeft;
	const move = (x- startX)*2;
	pElements.scrollLeft = scrollLeft - move;
});