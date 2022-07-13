const submitButton = document.querySelector('#submit')
const input = document.querySelector('#input')
const error = document.querySelector('#error')
const results = document.querySelector('#results')

const disabled = () => {
    input.disabled = true
    submitButton.disabled = true
}

const enabled = () => {
    input.disabled = false
    submitButton.disabled = false
}

// const changeUiState = (isDisabled) => {
//     input.disabled = isDisabled
//     submitButton.disabled = isDisabled
// }