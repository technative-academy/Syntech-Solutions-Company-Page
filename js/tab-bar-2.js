const tabBar2Button = document.querySelector(".tab-bar-2-button");

// add an event listener to when people click on this button
tabBar2Button.addEventListener("click", changeTextContentOfButton);

function changeTextContentOfButton(event) {
    const currentButton = event.currentTarget;

    if (currentButton.textContent === "View More") {
        // should show top row only
        currentButton.textContent = "View Less";
        const getTabBar2TabsRowBottom = document.querySelector(
            ".tab-bar-2-row-bottom"
        );
        getTabBar2TabsRowBottom.classList.add("is-shown");
    } else {
        // should show two rows
        currentButton.textContent = "View More";
        const getTabBar2TabsRowBottom = document.querySelector(
            ".tab-bar-2-row-bottom"
        );
        getTabBar2TabsRowBottom.classList.remove("is-shown");
        getTabBar2TabsRowBottom.classList.add("is-hidden");
    }
}
