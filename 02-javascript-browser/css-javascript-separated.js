const h1 = document.querySelector(".active");

// problem!
h1.addEventListener("click", () => {
    const clickedClass = "active";
    if (h1.className === clickedClass) {
        h1.className = ""
    } else {
        h1.className = clickedClass;
    }
})
