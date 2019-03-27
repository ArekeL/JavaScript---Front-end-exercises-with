// Code

//For

const btn = document.querySelector('button');
const liItems = document.querySelectorAll('li');
let sizeFont = 10;
// btn.addEventListener('click', () => {
//   console.log('dziala');
//   sizeFont++;
//   for (let i = 0; i < liItems.length; i++) {
//     liItems[i].style.display = 'block';
//     liItems[i].style.fontSize = `${sizeFont}px`;
//   }
// })

//Foreach

btn.addEventListener('click', () => {

  liItems.forEach((liItem) => {
    liItem.style.display = 'block';
    liItem.style.fontSize = sizeFont + 'px';
  })
  sizeFont++
})