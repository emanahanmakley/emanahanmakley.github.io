document.addEventListener("DOMContentLoaded", function () {
    printMessage("Welcome to the text adventure.")
    printMessage("Guess the number that I am thinking of.")
    const input = document.getElementById("input-textbox")
    input.focus()

    const form = document.getElementById("player-input-form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        userInput(input)

    })
})

function userInput(input) {
    printMessage(`You typed: ${input.value}`)
    if (input.value === "12") {
        printMessage("You win!!!!!")
    }
    else {
        printMessage("Please try again.")
    }
    input.value = ""
}

function printMessage(message) {
    const output = document.getElementById("output")
    const paragraph = document.createElement("p")
    paragraph.innerText = message
    output.appendChild(paragraph)
}