const allCategories = document.querySelectorAll(".item");
console.log(`В списке ${allCategories.length} категорий.`);

const listCategories = [...allCategories].map(function(elem) {return `Категория: ${elem.firstElementChild.textContent}
Количество элементов: ${elem.children[1].children.length}`}).join('\n');
console.log(listCategories);