const tabBar1TabElements = document.querySelectorAll('.tab-bar-1-tab')
const tabBar1ImageElement = document.querySelector('.tab-bar-image')

// tabBar1TabElements.forEach(addEventListenerTabBar1TabElements)

// for (let counter = 0; counter < 4; counter++) {
//     tabBar1TabElements[counter].addEventListener('mouseover', changeImage)
// }

tabBar1TabElements[0].addEventListener('mouseover', changeImage1)
tabBar1TabElements[1].addEventListener('mouseover', changeImage2)
tabBar1TabElements[2].addEventListener('mouseover', changeImage3)
tabBar1TabElements[3].addEventListener('mouseover', changeImage4)

//assign listener to tabBar1TabElements
// function addEventListenerTabBar1TabElements(tabBar1TabElement) {
//     tabBar1TabElement.addEventListener('mouseover', changeImage)
// }

function changeImage1() {
    // const currentTabBarTab = event.currentTarget;
    tabBar1ImageElement.src = '../images/tab-1-img-1.png'
}
function changeImage2() {
    // const currentTabBarTab = event.currentTarget;
    tabBar1ImageElement.src = '../images/tab-1-img-2.png'
}
function changeImage3() {
    // const currentTabBarTab = event.currentTarget;
    tabBar1ImageElement.src = '../images/tab-1-img-3.png'
}
function changeImage4() {
    // const currentTabBarTab = event.currentTarget;
    tabBar1ImageElement.src = '../images/tab-1-img-4.png'
}
