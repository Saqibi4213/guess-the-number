
const userInput = document.querySelector('.user-input');
const form = document.querySelector('form');
const result = document.querySelector('.result');
const allGuesses = document.querySelector('.all-gusses');
const submitBtn = document.querySelector('.submit-btn');
const btn = document.querySelector('.btn');

function a () {
    const allGuessesArray = [];
    let randomNumber = Math.round(Math.random() * 100)
    //thats for input when we enter number it submit the number and also guess the right number till you find  it and also it works on text that the number is high low or same
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const userInputValue = parseInt(userInput.value)
        if(userInputValue < randomNumber){
            result.innerText = 'Too  low!'
        }else if (userInputValue > randomNumber){
            result.innerText = 'Too  high!'
        }
        else{
           result.innerText = 'You Got It Congrats!'
           btn.disabled = false;
           submitBtn.disabled = true;
        }
        allGuesses.innerText = 'your gusses:' + allGuessesArray.join(', ')
        allGuessesArray.push(userInputValue);
        form.reset();;
    })
    
    btn.addEventListener('click', () => {
        allGuesses.innerText = '';
        result.innerText = '' ;
        btn.disabled = true;
        submitBtn.disabled = false;
        randomNumber = Math.round(Math.random() * 100)
    })    
}

a();