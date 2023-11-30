document.addEventListener("DOMContentLoaded", function () {

  const tagsEl = document.getElementById("tags")
  const textarea = document.getElementById("textarea")

  textarea.focus()

  textarea.addEventListener("keyup", (e) => {
    createTags(e.target.value)

    if (e.key === "Enter") {
      setTimeout(() => {
        e.target.value = ""
      }, 10)

      randomSelect()
    }
  })

  function createTags(input) {
    const tags = input.split(",").filter(tag => tag.trim() !== "").map(tag => tag.trim())
    console.log(tags)

    tagsEl.innerHTML = ""

    tags.forEach(tag => {
      const aTag = document.createElement("span")
      aTag.classList.add("tag")
      aTag.innerText = tag
      tagsEl.appendChild(aTag)
    })
  }

  function randomSelect() {
    const times = 30

    const interval =  setInterval( () => {
      const randomTag = pickRandomTag()
    }, 100)
  }

  function pickRandomTag() {
    const tagg = document.querySelectorAll(".tag")
    return tagg[Math.floor(Math.random() * tagg.length)]
  }

  function highlight () {
    
  }

})

