document.addEventListener("DOMContentLoaded", function() {
  
const boxes = document.querySelectorAll(".box")
console.log(boxes)

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight / 5 * 4

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top
    console.log(boxTop)
    if (boxTop < triggerBottom) {
      box.classList.add("show")
    } else {
      box.classList.remove("show")
    }
  })
})

})


/*document.addEventListener("DOMContentLoaded", function() {
  
const boxes = document.querySelectorAll(".box")
console.log(boxes)

window.addEventListener("scroll", () => checkBoxes)

console.log(window.innerHeight)

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4
  console.log(triggerBottom)

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top
    console.log(boxTop)
    if (boxTop < triggerBottom) {
      box.classList.add("show")
    } else {
      box.classList.remove("show")
    }
  })
}


})
*/