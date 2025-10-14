const tabBar4CustomerElements = document.querySelectorAll(
    ".tab-bar-4-customer-image"
);
const tabBar4CustomerMessageElement = document.querySelector(
    ".tab-bar-4-customer-message"
);

// using forEach method to call the function passing individual array elements as arguments
tabBar4CustomerElements.forEach(addEventListenerTabBar4CustomerElements);

// assign listener to tabBar1TileElements
function addEventListenerTabBar4CustomerElements(tabBar4Customer) {
    tabBar4Customer.addEventListener("mouseover", changeCustomerMessage);
}

// function changes the image and text based on tile location
function changeCustomerMessage(event) {
    const currentElement = event.currentTarget;
    if (currentElement.classList.contains("tab-bar-4-customer-feynman")) {
        tabBar4CustomerMessageElement.textContent =
            '"Feynman says: The first principle is that you must not fool yourself and you are the easiest person to fool"';
    } else if (currentElement.classList.contains("tab-bar-4-customer-tesla")) {
        tabBar4CustomerMessageElement.textContent =
            '"Tesla says: The day science begins to study non-physical phenomena, it will make more progress in one decade than in all the previous centuries of its existence"';
    } else {
        tabBar4CustomerMessageElement.textContent =
            '"Einstein says: There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle"';
    }
}
