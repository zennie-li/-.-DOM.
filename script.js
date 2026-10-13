let items = document.querySelectorAll(".item");
let items2 = document.querySelectorAll(".item2");

let grid_item1 = document.getElementById("grid_item1");
let grid_item2 = document.getElementById("grid_item2");
let grid_item3 = document.getElementById("grid_item3");
let grid_item4 = document.getElementById("grid_item4");
let grid_item5 = document.getElementById("grid_item5");
let grid_item6 = document.getElementById("grid_item6");

items.forEach((item) => {
    item.style.background = item.getAttribute("bg");

    item.addEventListener("click", () => {
        let color = item.getAttribute("bg");
        let shape = "";

        if (color === "red") {
            shape = '<div class="d14" style="--star-color: red"></div>';
        } else if (color === "blue") {
            shape = '<div class="d22"></div>';
        } else if (color === "yellow") {
            shape = '<div class="d31"></div>';
        } else if (color === "purple") {
            shape = '<div class="d38"></div>';
        }

        [grid_item1, grid_item2, grid_item3, grid_item4, grid_item5, grid_item6].forEach((grid_item) => {
            if (color === "white") {
                grid_item.style.border = "2px solid gray";
                grid_item.innerHTML = "";
            } else {
                grid_item.style.border = "none";
                grid_item.innerHTML = shape;
            }
        });
    });
});


items2.forEach((item) => {
    item.style.background = item.getAttribute("bg");

    item.addEventListener("click", () => {
        document.body.style.background = item.getAttribute("bg");
    });
});