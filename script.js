var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var imageDiv = document.querySelector("#image")

main.addEventListener("mousemove", (val) => {
    gsap.to(cursor, {
        x: val.x-8,
        y: val.y-6,
        duration: 0.5,
    })
})


imageDiv.addEventListener("mouseenter", () => {
    cursor.innerHTML = "View More"
    gsap.to(cursor, {
        scale:3,
        backgroundColor:"#ffffff88",
    })
})

imageDiv.addEventListener("mouseleave", () => {
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale:1,
        backgroundColor: "",
    })
})