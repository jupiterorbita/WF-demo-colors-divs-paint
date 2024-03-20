// ======= CREATE BOXES =======
for (let i = 0; i < 2000; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    document.querySelector(".box-grid").appendChild(box);
}

let selectedColor = "";

// ===== STORE COLOR ===========
function setSelectedColor(x) {
    console.log(x.classList[0]);
    let color = x.classList[0];
    selectedColor = color;
    // change the .active-color class the innerHTML of the button
    document.querySelector(".active-color").innerHTML = `active color: ${color}`;
    if (color === "white") {
        document.querySelector(".active-color").style.color = "black";
        document.querySelector(".active-color").style.backgroundColor = color;
    } else {
        document.querySelector(".active-color").style.color = "white";
        document.querySelector(".active-color").style.backgroundColor = color;
    }
}

// ====== COLOR BOXES =======
// ===== SHIFT KEY =====
const boxes = document.querySelectorAll(".box");

for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];

    box.addEventListener("mouseover", function (event) {
        if (event.shiftKey) {
            box.style.backgroundColor = selectedColor;
        }
    });
}

// ====== CLEAR BUTTON ======
document.querySelector("button").addEventListener("click", function () {
    const boxes = document.querySelectorAll(".box");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "white";
    }
    selectedColor = "white";
    document.querySelector(".active-color").style.color = "black";
    document.querySelector(".active-color").style.backgroundColor = "white";
});