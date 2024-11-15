

let keyIndex = 1
let suggestions = document.querySelectorAll(".command_sug_item")
let currentSuggestion = document.querySelector(`.command_sug_item:nth-child(${keyIndex})`)
currentSuggestion.classList.add("current_suggestion")

const keyActions = {
  "K": "You just Kept the cat",
  "P": "You just Pet the cat",
  "F": "You just Fed the cat",
  "S": "You just Sang for the cat",
  "E": "You just Ate the cat",
  "G": "You just Played with the cat",
  "H": "You just Hid from the cat",
  "A": "You just Admired the cat",
  "C": "You made a Campfire next to the cat",
  "P": "You made Cat a Photo"

}

document.addEventListener("keydown", (event) => {
  console.log(event)

  let currentCapKey = currentSuggestion.querySelector(".command_sug_text").textContent.charAt(6)
let currentLowKey = currentCapKey.toLocaleLowerCase()

  if (event.key === currentCapKey || event.key === currentLowKey) {
    PNotify.info({
      title: keyActions[currentCapKey],
      hide: false
    });;
    currentSuggestion.classList.remove("current_suggestion")
    keyIndex = keyIndex + 1
    currentSuggestion = document.querySelector(`.command_sug_item:nth-child(${keyIndex})`)
    currentSuggestion.classList.add("current_suggestion")


  } else {
    PNotify.error({
      title: 'Uh Oh!',
      text: 'Try again',
      hide: false
    });
  }

});

