const e_display = document.getElementById("pw-display-text")
const e_copy = document.getElementById("copy")
const e_btn = document.getElementById("generate")
const e_len = document.getElementById("len")
const e_upper = document.getElementById("upper")
const e_lower = document.getElementById("lower")
const e_number = document.getElementById("number")
const e_symbol = document.getElementById("symbol")

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const LOWER = "abcdefghijklmnopqrstuvwxyz"
const NUMBER = "0123456789"
const SYMBOL = "!@#$&*+=" // not ><()%;\

//* retorna um elemento do array a partir de uma posição aleatória
function getUppercase() {
    return UPPER[Math.floor(Math.random() * UPPER.length)]

}
function getLowercase() {
    return LOWER[Math.floor(Math.random() * LOWER.length)]
}

function getNumber() {
    return NUMBER[Math.floor(Math.random() * NUMBER.length)]
}

function getSymbol() {
    return SYMBOL[Math.floor(Math.random() * SYMBOL.length)]
}

function IsPossible(len) {
    //* valida se pelo menos 1 checkbox está marcada
    if (!(e_upper.checked || e_lower.checked || e_number.checked || e_symbol.checked)) {
        return false
    }
    //* valida a quantidade de caracteres do input
    if (len > 20) {
        return 20
    } else if (len < 1) {
        return false
    } else {
        return len
    }
}

e_btn.addEventListener("click", generatePassword)
function generatePassword() {

    len = IsPossible(e_len.value)

    if(!( len )) {
        e_display.innerText = "no way dude"
        return
    }

    let password = ""

    for (let i = 0; i < len; i++) {
        const character = generateCharacter()
        password += character
    }

    e_display.innerText = password
}

function generateCharacter() {
    const array_character = []

    if (e_upper.checked) {
        array_character.push(getUppercase())
    }

    if (e_lower.checked) {
        array_character.push(getLowercase())
    }

    if (e_number.checked) {
        array_character.push(getNumber())
    }

    if (e_symbol.checked) {
        array_character.push(getSymbol())
    }

    return array_character[Math.floor(Math.random() * array_character.length)]
}


e_copy.addEventListener("click", () => {
    const textarea = document.createElement("textarea")
    const password = e_display.innerText

    if (!password) {
        return
    }

    // cria textarea e copia seu conteúdo
    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    textarea.remove()
})