const toggleImage = document.getElementById('toggleImage');
const toggleButton = document.getElementById('toggleButton');  // Get the button element

let isImage1 = true; // Track the current image

const image1Src = "utopian.png";
const image2Src = "dystopian.png";

function toggleImageFunction() {
    if (isImage1) {
        toggleImage.src = image2Src;
    } else {
        toggleImage.src = image1Src;
    }
    isImage1 = !isImage1; // Toggle the state
}

// Add event listener to the button
toggleButton.addEventListener('click', toggleImageFunction);

// Optionally, make the image itself clickable to toggle
toggleImage.addEventListener('click', toggleImageFunction);

