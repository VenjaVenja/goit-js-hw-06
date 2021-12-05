const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');
ingredients.map(element => {

  const itemLiEl = document.createElement('li');
  itemLiEl.textContent = element;
  itemLiEl.classList.add('item');
  
  listEl.append(itemLiEl);
})