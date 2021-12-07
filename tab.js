let tabs = document.querySelector(".tabs");
let tabHeader = tabs.querySelector(".tabHeader");
let tabBody = tabs.querySelector(".tabBody");
let tabIndicator = tabs.querySelector(".tabIndicator");
let tabHeaderNodes = tabs.querySelectorAll(".tabHeader > div");
let tabBodyNodes = tabs.querySelectorAll(".tabBody > div");

// console.log(tabHeaderNodes);

for(let i = 0; i < tabHeaderNodes.length; i++){

	console.log(tabHeaderNodes[i]);
	console.log(tabBodyNodes[i]);

	tabHeaderNodes[i].addEventListener("click",function(){

		console.log(tabHeaderNodes[i]);
		console.log(tabBodyNodes[i]);

		// tabHeader.querySelector(".active").classList.remove("active");
		tabs.querySelector(".active").classList.remove("active");
		tabHeaderNodes[i].classList.add("active");
		

		tabBody.querySelector(".active").classList.remove("active");
		tabBodyNodes[i].classList.add("active");

		tabIndicator.style.left = `calc(calc(calc(25% - 5px) * ${i}) + 10px)`;
	});
}




/*
	Want to know:

	tabHeader.querySelector(".active").classList.remove("active");
	er bodole
	tabs.querySelector(".active").classList.remove("active");
	dela o kaj kore.
	jodi : tabs.querySelector(".active").classList.remove("active");
	sob "active" class remove kore day tobe:
	tabBody.querySelector(".active").classList.remove("active");
	line er to proyojon thakar kotha na.
	tahole ai line remove kore dile code keno kaj kore na.
*/