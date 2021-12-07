let tabs = document.querySelector(".tabs");
let tabHeader = tabs.querySelector(".tabHeader");
let tabBody = tabs.querySelector(".tabBody");
let tabIndicator = tabs.querySelector(".tabIndicator");
let tabHeaderNodes = tabs.querySelectorAll(".tabHeader > div");
let tabBodyNodes = tabs.querySelectorAll(".tabBody > div");



for(let i = 0; i < tabHeaderNodes.length; i++){
	tabHeaderNodes[i].addEventListener("click",function(){
		tabHeader.querySelector(".active").classList.remove("active");
		tabHeaderNodes[i].classList.add("active");

		tabBody.querySelector(".active").classList.remove("active");
		tabBodyNodes[i].classList.add("active");

		tabIndicator.style.left = `calc(calc(calc(25% - 5px) * ${i}) + 10px)`;
	});
}