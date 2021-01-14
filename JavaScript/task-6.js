const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('change', e => {
    if (5 < e.target.value.length && e.target.value.length < 7) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add("valid");
    } else {
        inputRef.classList.remove('valid')
        inputRef.classList.add('invalid');
}
});
