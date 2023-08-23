const cocoen = document.querySelector("#teste")
const p = document.querySelector("#teste--p")


function hideP() {
    p.style.display = "none"
}

cocoen.addEventListener("mousedown", () => {
    hideP()
})

cocoen.addEventListener("touchmove", () => {
    hideP()
})


//ontouchmove="hideP()"