const inputRef = document.querySelector('#validation-input');
const dataLengthInput = inputRef.getAttribute('data-length');
inputRef.addEventListener('change', e => {
    if (e.target.value.length === +dataLengthInput) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add("valid");
    } else {
        inputRef.classList.remove('valid')
        inputRef.classList.add('invalid');
}
});
