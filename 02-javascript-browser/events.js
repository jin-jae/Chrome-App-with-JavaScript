const title = document.querySelector(".innerclass :first-child");

console.dir(title);

// title.style.color = "blue";

// function handleTitleClick() {
//     console.log("Title was clicked!");
// }

// title.addEventListener("click", handleTitleClick);

title.addEventListener("click", () => title.style.color = "powderblue");
title.addEventListener("mouseenter", () => {
    title.innerText = "Mouse is here!";
    title.style.color = "blue";
});
title.addEventListener("mouseleave", () => {
    title.innerText = "Mouse is gone!";
    title.style.color = "red";
})

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement
