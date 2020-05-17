const gridItems = document.querySelectorAll(".container > div");

gridItems.forEach(gridItem => {
    gridItem.addEventListener("click", (e) => {
        e.target.parentElement.classList.toggle("bg1");
        e.target.parentElement.classList.toggle("bg2");
    });
});