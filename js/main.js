console.log("Js Connected");

// Selecting elements
let button = document.querySelector("#button img");
let burgerShow = document.querySelector("#burger-con");
let dropDown1 = document.querySelector("#pop-legal #about-legal");


// Function to toggle about menu dropdown
function aboutMenu() {
    if (dropDown1) {
        dropDown1.classList.toggle("smalldrop");
        console.log("About Menu dropped");
    } else {
        console.error("Dropdown element not found.");
    }
}

// Function to toggle hamburger menu
function hamburgerMenu() {
    burgerShow.classList.toggle("opaque-toggle");
    button.classList.toggle("burger");
    console.log("Menu Triggered");
}

// Check if button exists before adding event listener
if (button) {
    button.addEventListener("click", hamburgerMenu, false);
} else {
    console.error("#button element not found.");
}

// Check if dropDown1 exists before adding event listener
if (document.getElementById("about-legal")) {
    dropDown1.addEventListener("click", aboutMenu, false);
} else {
    // Only log an error if the current page is contact.html
    if (window.location.pathname.includes("contact.html")) {
        console.error("#about-legal element not found.");
    }
}

// This function is for the video to play on page load and loop 
window.onload = function() {
    // Play videos
    var videos = document.getElementsByClassName("myVideo");
    if (videos.length > 0) {
        Array.from(videos).forEach(function(video) {
            video.muted = true; // Mute the video
            video.play();
            video.addEventListener('ended', function() {
                this.currentTime = 0;
                this.play();
            }, false);
        });
    } else {
        console.error("Video element not found.");
    }

    // Only try to update content if on collection.html page
    if (window.location.pathname.includes("collection.html")) {
        var images = [
            { url: "images/mb-3can-original-412.png", name: "Original" },
            { url: "images/mb-3can-pink-412.png", name: "Shockwave Raspberry" },
            { url: "images/mb-3can-blue-412.png", name: "Sonic Blueberry" },
            { url: "images/mb-3can-green-412.png", name: "Critashock Burst" }
        ];

        var currentIndex = 0;

        // Function to update image and product name
        function updateContent() {
            var productImage = document.getElementById("productImage");
            if (productImage) {
                productImage.src = images[currentIndex].url;
            } else {
                console.error("Product image element not found.");
            }
            var productName = document.getElementById("productName");
            if (productName) {
                productName.textContent = images[currentIndex].name;
            } else {
                console.error("Product name element not found.");
            }
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
    }
};

document.addEventListener("DOMContentLoaded", function() {
    // Get references to the buttons and the lightbox
    var learnMoreDivs = document.querySelectorAll(".learn-more, .learn-more-desktop");
    var lightbox = document.querySelector(".lightbox");

    // Add click event listener to the buttons
    learnMoreDivs.forEach(function(div) {
        div.addEventListener("click", function() {
            // Display the lightbox
            lightbox.style.display = "flex";
        });
    });

    // Add click event listener to close the lightbox when clicked outside
    lightbox.addEventListener("click", function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
