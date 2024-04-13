document.addEventListener("DOMContentLoaded", function() {
    console.log("Js Connected");

    let button = document.querySelector("#button img");
    let burgerShow = document.querySelector("#burger-con");


    function hamburgerMenu() {
        burgerShow.classList.toggle("opaque-toggle");
        button.classList.toggle("burger");
    };

    if (button && burgerShow) {
        button.addEventListener("click", hamburgerMenu, false);
    } else {
        console.error("Button or burgerShow element not found.");
    }
});

// This function is for the video to play on page load and loop 
window.onload = function() {
    var video = document.getElementById("myVideo");
    if (video) {
        video.play();
        video.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
    } else {
        console.error("Video element not found.");
    }
};

	
// -----------------------menu drop down-------------------------------------
(function() {
    // Ensure the variables button and burgerShow are declared within the scope of the self-invoking function
    let button = document.querySelector("#button img");
    let burgerShow = document.querySelector("#burger-con");

    function hamburgerMenu() {
        burgerShow.classList.toggle("opaque-toggle");
        button.classList.toggle("burger");
    };
    
    // Check if button and burgerShow elements are found before adding the event listener
    if (button && burgerShow) {
        button.addEventListener("click", hamburgerMenu, false);
    } else {
        console.error("Button or burgerShow element not found.");
    }
})();

// This function is for the video to play on page load and loop 
window.onload = function() {
    var video = document.getElementById("myVideo");
    if (video) {
        video.addEventListener('loadedmetadata', function() {
            video.play();
        });
    } else {
        console.error("Video element not found.");
    }
};