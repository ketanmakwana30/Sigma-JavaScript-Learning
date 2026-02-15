
// Callback Nesting    -->   Callback Hell   ( Pyramid of Doom )

let h1 = document.querySelector("h1");

function colorChange(color, delay, nextColorChange){
    setTimeout(()=> {
        h1.style.color = color;
        if (nextColorChange) nextColorChange();
    },delay);
}

colorChange("red", 500, () => {
    colorChange("orange", 500,() => {
        colorChange("green", 500, () => {
            colorChange("yellow", 500, () => {
                colorChange("blue", 500, () => {
                    colorChange("pink", 500, () => {
                        colorChange("purple", 500)
                    })
                })
            })
        })
    })
})

