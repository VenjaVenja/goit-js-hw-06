const categoryEl = document.querySelector('#categories');

console.log(`Number of categories:`, categoryEl.children.length);

const itemEl = document.querySelectorAll('.item');
itemEl.forEach(element => {
    const titel = element.querySelector('h2');
    console.log(`Category: ${titel.textContent}`);

    const number = element.querySelectorAll('li');
    console.log(`Elements: ${number.length}`);
})