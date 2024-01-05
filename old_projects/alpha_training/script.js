const alpha = "abcdefghijklmnopqrstuvwxyz"
let answer

window.addEventListener("load", () => {
    generate()
})

window.addEventListener("keypress", (e) => {
    if (e.key == "Enter" && document.getElementById("in").value.length > 0) {
        submitAnswer()
    }
})

const generate = () => {
    let g = Math.floor(Math.random() * 26)
    if (Math.random() < 0.5) {
        document.getElementById("q").innerHTML = g;
        answer = alpha[g];
    } else {
        document.getElementById("q").innerHTML = alpha[g];
        answer = g
    }
    document.getElementById("in").focus()
}

const submitAnswer = () => {
    let a = document.getElementById("in").value.toLowerCase()
    document.getElementById("in").value = ""
    document.getElementById("correct").innerHTML = ""
    if (a == answer) {
        document.getElementsByTagName("body")[0].style.backgroundColor = '#BBFFBB'
        generate()
    } else {
        document.getElementsByTagName("body")[0].style.backgroundColor = '#FFBBBB'
        document.getElementById("correct").innerHTML = answer
        setTimeout(generate, 1000)
    }
}