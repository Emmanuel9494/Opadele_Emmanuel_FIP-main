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

// This function is for the video to play on page load and loop 
window.onload = function() {
	var video = document.getElementById("myVideo");
	video.play();
  };
//   