const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const elementUl = document.querySelector('#ingredients');

function createIngredients(array) {
const categoryIngredients = array.map(ingredient => {
    const list = document.createElement('li');
    list.textContent = ingredient;
    return list;
});
elementUl.append(...categoryIngredients);
}

createIngredients(ingredients);