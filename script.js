var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")


main.addEventListener("mousemove", (val) => {
    console.log("click");
    gsap.to(cursor, {
        x: val.x-8,
        y: val.y-6,
        duration: 1.2,
        ease: "back.out"
    })
})