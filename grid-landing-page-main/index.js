const menuButton = document.getElementById("menu-button");
const navMenuContainer = document.getElementById("nav-menu-container")
const mainContainer = document.getElementById("main-container")
menuButton.addEventListener("click", () => {
    console.log("owo");
    
    navMenuContainer.classList.toggle("hide");
    mainContainer.classList.toggle("blur");
    
});