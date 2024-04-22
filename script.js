const result = document.querySelector(".result")

const playHuman = (humanChoice) => {


    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3)

    console.log(randomNumber)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {


    console.log('Humano:' + human + " Maquina:" + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate!"
    } else if (
        (human === "paper" && machine === "rock") ||
        (human === "rock" && machine === "scissors") ||
        (human === "scissors" && machine === "paper")) {
        result.innerHTML = "Você ganhou!"

    } else {
        result.innerHTML = "Você perdeu para a Alexa!"

    }
}