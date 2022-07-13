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

const showError = error => {
    errorSpan.innerHTML = `🚨 ${error}🚨`;
}

const showResults = () => {
    results.forEach(result => {
        resultsContainer.innerHTML += `
            <div class="resultsItem">
                <a href="https://en.wikipedia.org/?curid=${result.pageId}" target="_blank" class="card animated bounceInUp">
                    <h2 class="resultsItemTitle">${result.title}</h2>
                    <p class="resultsItemIntro">${result.intro}</p>
                </a>
            </div>
        `;
    });
}

const getData = async () => {
    const userInput = input.value;
    if (isInputEmpty (userInput)) return;

    params.gsrsearch = userInput;
    disabled();

    try {
       const { data } = await axios.get(endpoint, { params }); 

       if (data.error) throw new Error(data.error.info);

     } catch (error) {
        showError(error);
     } finally {
        enableUi();
     }
};

const handleKeyEvent = (e) => {
    if(e.key === 'Enter') {
        getData();
    }
}

const registerEventHandlers = () => {
    input.addEventListener('keydown', handleKeyEvent);
    submitButton.addEventListener('click', getData );
};

registerEventHandlers();