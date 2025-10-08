// get the button element with a class of ...
const tabBar2Button = document.querySelector('.tab-bar-2-tabs-button')

// add an event listener to when people click on this button
tabBar2Button.addEventListener('click', showTabBar2BottomRow)

function showTabBar2BottomRow() {
    tabBar2Button.classList.add('is-hidden')
    const tabBar2BottomRowElement = document.querySelector(
        '.tab-bar-2-tabs-row-bottom'
    )
    tabBar2BottomRowElement.classList.add('is-shown')
}

// when the button is clicked:
//   1. add a class of 'is-hidden' to the button
//   2. get the element with a class of ... (row-bottom) and add a class of 'is-shown'
