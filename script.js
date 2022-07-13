const submitButton = document.querySelector('#submit');
const input = document.querySelector('#input');
const error = document.querySelector('#error');
const results = document.querySelector('#results');

const endpoint = 'https://en.wikipedia.org/w/api.php?'
const params = {
    origin: '*',
    format: 'json',
    action: 'query',
    prop: 'extracts',
    exchars: 250,
    exintro: true,
    explaintext: true,
    generator: 'search',
    gsrlimit: 20,
    
}

const disabled = () => {
    input.disabled = true;
    submitButton.disabled = true;
}

const enabled = () => {
    input.disabled = false;
    submitButton.disabled = false;
}

// const changeUiState = (isDisabled) => {
//     input.disabled = isDisabled
//     submitButton.disabled = isDisabled
// }

const clearPreviousResults = () => {
    resultsContainer.innerHTML = '';
    errorSpan.innerHTML = '';
}

const isInputEmpty = (input) => {
    if (!input || input === '') return true;
    return false;
}

const showError = (error) => {
    errorSpan.innerHTML = '🚨 ${error}🚨';
}