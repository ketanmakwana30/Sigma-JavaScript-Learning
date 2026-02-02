const box = document.querySelector(".box");
const para = document.querySelector("p");
const h3 = document.querySelector("h3");
const btn = document.querySelector("button");


para.addEventListener("click", () => {
    console.log("hello"); 
});

box.addEventListener("mouseover", () => {
    console.log("mouse inside box"); 
});



// btn.addEventListener("click", () => {            // Arrow Function
//     console.log(this); 
// });

// btn.addEventListener("click", function () {      // Simpale Function
//     console.log(this.innerText); 
//     this.style.backgroundColor = "blue", this.style.color = "white";
// });

function changeColor() {
    this.style.backgroundColor = "blue";
}

para.addEventListener("click", changeColor);
btn.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);