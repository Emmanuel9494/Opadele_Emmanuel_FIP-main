(function(){
		
	console.log("Js Connected");

	let button = document.querySelector("#button img");
    let burgerShow = document.querySelector("#burger-con");

	function hamburgerMenu() {
        burgerShow.classList.toggle("opaque-toggle");
		button.classList.toggle("burger");
	};

	

	button.addEventListener("click", hamburgerMenu, false);		
})();