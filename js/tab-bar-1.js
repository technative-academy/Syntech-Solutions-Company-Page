const tabBar1TileElements = document.querySelectorAll(".tab-bar-1-tile");
const tabBar1ImageElement = document.querySelector(".tab-bar-1-image");
const tabBar1ImageTextElement = document.querySelector(".tab-bar-1-image-text");

// using forEach method to call the function passing individual array elements as arguments
tabBar1TileElements.forEach(addEventListenerTabBar1TileElements);

// assign listener to tabBar1TileElements
function addEventListenerTabBar1TileElements(tabBar1TileElement) {
    tabBar1TileElement.addEventListener("mouseover", changeImage);
}

// function changes the image and text based on tile location
function changeImage(event) {
    const currentElement = event.currentTarget;
    if (currentElement.classList.contains("tab1-tile1")) {
        tabBar1ImageElement.src = "../images/tab-bar-1-img-1.png";
        tabBar1ImageTextElement.textContent =
            "A simulated experience that employs 3D near-eye displays";
    } else if (currentElement.classList.contains("tab1-tile2")) {
        tabBar1ImageElement.src = "../images/tab-bar-1-img-2.png";
        tabBar1ImageTextElement.textContent =
            "Elements of sight, sound, and touch come together";
    } else if (currentElement.classList.contains("tab1-tile3")) {
        tabBar1ImageElement.src = "../images/tab-bar-1-img-3.png";
        tabBar1ImageTextElement.textContent =
            "Experienced when performing tactile operations that involve skill";
    } else {
        tabBar1ImageElement.src = "../images/tab-bar-1-img-4.png";
        tabBar1ImageTextElement.textContent =
            "Provides a virtual reality environment for the user";
    }
}
