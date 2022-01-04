'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////
console.log(document.documentElement);
// console.log(document.head);
console.log(document.body);

//Creating and inserting elements
//.insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookied for improved functionalityand analytics';
message.innerHTML =
  'We use cookied for improved functionalityand analytics. <button class="btn btn--close-cookie">Got it</button>';
const header = document.querySelector('.header');
// header.prepend(message); //The Element.prepend() method inserts a set of Node objects or DOMString objects before the first child of the Element. DOMString objects are inserted as equivalent Text nodes.
header.append(message); //The Element.append() method inserts a set of Node objects or DOMString objects after the last child of the Element. DOMString objects are inserted as equivalent Text nodes.
//dom element will be at time  place at a time .. it cannot be inn two  places

//we can make it appear at 2 places
// header.append(message.cloneNode(true)); //by this  message  can appear  in 2 places.\
//The cloneNode() method creates a copy of a node, and returns the clone.The cloneNode() method clones all attributes and their values.

//Element.before();
// header.before(message); //The Element.before() method inserts a set of Node or DOMString objects in the children list of this Element's parent, just before this Element. DOMString objects are inserted as equivalent Text nodes.

//Element.after();
// header.after(message); //The Element.after() method inserts a set of Node or DOMString objects in the children list of the Element's parent, just after the Element. DOMString objects are inserted as equivalent Text nodes.

//delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove(); //remove is used  to delete the element
    console.log(message.parentElement);
    message.parentElement.removeChild(message); //it is another way of implementing delete  functionality
  });

//styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

document.documentElement.style.setProperty('--color-primary', 'orangered'); //by  this we can manipulate css variables

//Attributes
const logo = document.querySelector('.nav__logo');
//standard attributes
console.log(logo.alt); //op: Bankist logo
console.log(logo.src); //op: http://127.0.0.1:5500/img/logo.png
console.log(logo.className); //op: nav__logo

//Non-standard
console.log(logo.designer); //op: undefined
console.log(logo.getAttribute('designer')); //it will give relative path

//setAttribute
logo.setAttribute('company', 'Bankist');
console.log(logo);

const Link = document.querySelector('.nav__link--btn');
console.log(Link.href);
console.log(Link.getAttribute('href'));

//Data attributes
console.log(logo.dataset.versionNumber);
