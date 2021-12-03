const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const itemsEl = ingredients.map(item => {

  const itemsListEl = document.createElement('li');

  itemsListEl.textContent = item;
  itemsListEl.classList.add('item');

  return itemsListEl;

});

listEl.append(...itemsEl);

console.log(listEl);
