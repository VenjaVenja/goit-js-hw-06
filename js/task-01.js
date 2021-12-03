// const categoriesLiAll = document.querySelectorAll("li.item")

// console.log(`Number of categorie: ${categoriesLiAll.length}`);

// const itemsEl = document.querySelectorAll('.item');
// itemsEl.forEach((element) => {
//     const titel = element.querySelector('h2').innerHTML;
//     const itemLength = element.querySelectorAll('li').length;
//     console.log(`Catagory: ${titel} / Elements: ${itemLength}`);
// });

const categoriesAll = document.querySelector('#categories');

const liEtemsEl = categoriesAll.querySelectorAll('.item').length;

console.log(`Number of categories: ${liEtemsEl}`);

const titelEl = document.querySelectorAll('.item');
titelEl.forEach((elem) => {
    const titel = elem.querySelector('h2').innerHTML;
    const itemLenght = elem.querySelectorAll('li').length;

    console.log(`Category: ${titel}`);
    console.log(`Elements: ${itemLenght}`);
});


