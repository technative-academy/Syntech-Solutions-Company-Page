// get the button element with a class of ...
const tabBar2Button = document.querySelector(".tab-bar-2-tabs-button");

// add an event listener to when people click on this button
tabBar2Button.addEventListener("click", changeTextContentOfButton);

function changeTextContentOfButton(event) {
    const currentButton = event.currentTarget;

    if (currentButton.textContent === "View More") {
        // should show top row only
        currentButton.textContent = "View Less";
        const getTabBar2TabsRowBottom = document.querySelector(
            ".tab-bar-2-tabs-row-bottom"
        );
        getTabBar2TabsRowBottom.classList.add("is-shown");
    } else {
        // should show two rows
        currentButton.textContent = "View More";
        const getTabBar2TabsRowBottom = document.querySelector(
            ".tab-bar-2-tabs-row-bottom"
        );
        getTabBar2TabsRowBottom.classList.remove("is-shown");
        getTabBar2TabsRowBottom.classList.add("is-hidden");
    }
}

/* 
    function showOrHideTabBar2BottomRow(event) {
    const currentButton = event.currentTarget
    if (currentButton.classList.contains('is-hidden')) {
    }
    tabBar2Button.classList.add('is-hidden')
    const tabBar2BottomRowElement = document.querySelector(
        '.tab-bar-2-tabs-row-bottom'
    )
    tabBar2BottomRowElement.classList.add('is-shown')
}
 */

// when the button is clicked:
//   1. add a class of 'is-hidden' to the button
//   2. get the element with a class of ... (row-bottom) and add a class of 'is-shown'
