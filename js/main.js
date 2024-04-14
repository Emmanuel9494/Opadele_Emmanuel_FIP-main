(function() {
    console.log("Js Connected");

    let button = document.querySelector("#button img");
    let burgerShow = document.querySelector("#burger-con");



    function hamburgerMenu() {
        burgerShow.classList.toggle("opaque-toggle");
        button.classList.toggle("burger");
    };

	button.addEventListener("click", hamburgerMenu, false);
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

	// --------------------------------



	
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
    var videos = document.getElementsByClassName("myVideo");
    if (videos.length > 0) {
        Array.from(videos).forEach(function(video) {
            video.addEventListener('loadedmetadata', function() {
                video.play();
            });
        });
    } else {
        console.error("Video element not found.");
    }
};

// this is for collection javascript animation to make it more dynamic

window.onload = function() {
    // Array of image URLs and product names
    var images = [
        { url: "images/mb-3can-original-412.png", name: "Original" },
        { url: "images/mb-3can-pink-412.png", name: "Shockwave Raspberry" },
        { url: "images/mb-3can-blue-412.png", name: "Sonic Blueberry" },
        { url: "images/mb-3can-green-412.png", name: "Critashock Burst" }
    ];

    var currentIndex = 0;

    // Function to update image and product name
    function updateContent() {
        document.getElementById("productImage").src = images[currentIndex].url;
        document.getElementById("productName").textContent = images[currentIndex].name;
    }

    // Function to switch to the next image and product name
    function nextContent() {
        currentIndex = (currentIndex + 1) % images.length;
        updateContent();
    }

    // Automatically switch to the next content every few seconds
    setInterval(nextContent, 3000);

    // Initial update
    updateContent();
};