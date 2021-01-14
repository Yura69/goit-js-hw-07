const counterRef = document.getElementById('value');
const incrementRef = document.querySelector('[data-action="increment"]');
const decrementRef = document.querySelector('[data-action="decrement"]');
let counterValue = 0;


incrementRef.addEventListener('click', event => {
   counterValue += 1;
   counterRef.textContent = counterValue;
});

decrementRef.addEventListener('click', event => {
    counterValue -= 1;
    counterRef.textContent = counterValue;
 });