const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

// nameInputRef.addEventListener('input', event => {
//     nameOutputRef.textContent = event.target.value;
// });
nameInputRef.addEventListener('input', InputChangeHandler);
    
function InputChangeHandler(event) {
    nameOutputRef.textContent =
    nameInputRef.value === '' ? 'незнакомец' : event.target.value;
}