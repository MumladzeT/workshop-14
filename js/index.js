let button = document.querySelector('.burger-btn');
let box = document.querySelector(".box");
box.style.display = "none";
let isOpen = false;

button.addEventListener("click", () => {

    if (isOpen === false) {
        box.style.display = "block";
        isOpen = true;
    }

    else {
        box.style.display = "none";
        isOpen = false;
    }

})