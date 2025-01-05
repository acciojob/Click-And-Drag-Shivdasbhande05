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