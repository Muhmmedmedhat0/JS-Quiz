// TODO: 1- Declare & assign variables pointing to the corresponding element(s)
// statement should be the "statement" div
const statment = document.querySelector('#statement');
// optionButtons should be all the elements within the "options" div
const optionButtons = document.querySelectorAll('button');
// explanation should be the "explanation" div
const explanation = document.querySelector('#explanation');

// TODO: 2- Declare & assign a variable called fact
// Its value should be an object with a statement, true/false answer, and explanation
const fact = {
  statment: 'Array are a type of data structure in JavaScript.',
  answer: true,
  explanation: 'arrays are a type of data structure in JavaScript.',
};

// TODO: 3- Set the text of the statement element to the fact's statement
statment.textContent = `${fact.statment}?!`;

// TODO: 4- Declare disable & enable functions to set or remove the "disabled" attribute from a given button element

const disable = (button) => button.setAttribute('disabled', '');

const enable = (button) => button.removeAttribute('disabled');

// disable(button) should set the button element's attribute "disabled" to the value ""
// enable(button) should remove the attribute "disabled" from the button element

// TODO: 5- Declare an isCorrect function that compares a guess to the right answer
// isCorrect(guess) should return true if the guess matches the fact's answer
const isCorrect = (guessString) => guessString === fact.answer.toString();

// TODO: 6A- Use a for loop to add a click event listener to each of the optionButtons
for (const button of optionButtons) {
  // TODO: 6B- create event handler function, display the fact's explanation by setting the text of the explanation element
  button.addEventListener('click', (e) => {
    explanation.textContent = fact.explanation;
    // TODO: 7- Within the event handler function,
    // Use a for loop to disable all the option buttons
    for (const button of optionButtons) {
      disable(button);
    }
    // TODO: 8- Within the event handler function,
    // Get the guessed value from the clicked button
    const guessString = e.target.value;
    // Use a conditional to compare the guess to the fact's answer
    // and add the "correct"/"incorrect" class as appropriate
    if (isCorrect(guessString)) {
      e.target.classList.add('correct');
    } else {
      e.target.classList.add('incorrect');
    }
  });
}
