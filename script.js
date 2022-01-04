'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');

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
//page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//above code is inefficient because for every link we need a function to handle event. //it is used when there are less elements, if there are 1000 elements then it create performance problem

//event delegation
//1. add event listener to commom parent element
//2. determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  //matching strategy
  if (e.target.classList.contains('nav__link')) {
    //by this we can handle only click events on elements with classs name nav__link//event cannot be handled on parent element
    e.preventDefault();

    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//building tabbed commponent
const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab'); //it will also work if we clicked on span

  //guard clause
  if (!clicked) return; //if will make to stop adding  operations__tab--active to element when we clicked outside of buttons
  //remove class
  tabs.forEach(t => t.classList.remove('operations__tab--active'));

  tabsContent.forEach(t => t.classList.remove('operations__content--active'));
  //add classlist
  //activate content area
  clicked.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//Menu fade animation
//refactoring code
const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};
nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});
nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});

//////////////// LECTURES ////////////
/*
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
*/

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
  // const s1coords = section1.getBoundingClientRect(); //The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
  // console.log(s1coords);
  // console.log(e.target); //The target event property returns the element that triggered the event.
  // console.log(e.target.getBoundingClientRect()); //btnScrollTo  INFO
  // console.log('Current scroll (x/y)', window.pageXOffset, pageYOffset); //it returns the number of pixels the document is currently scrolled along the horizontal axis(pageXOffset)  and vertical axis(pageYOffset) (that is, up or down)
  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );
  //scrolling

  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,  //oldschool way
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //new way
  section1.scrollIntoView({ behavior: 'smooth' });
});

// const h1 = document.querySelector('h1');
// //The mouseenter event is fired at an Element when a pointing device (usually a mouse) is initially moved so that its hotspot is within the element at which the event was fired.
// h1.addEventListener('mouseenter', function (e) {
//   alert('you are reading the heading');
// });

// h1.onmouseenter = function (e) {
//   alert('this is old school way of listening events');
// };

// //event propagation practice
// //✅immportant

// //random  color
// //rgb(255,255,255)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor(); //in event handler this keyword always attach to the element to which event handler attached
//   console.log('link', e.target, e.currentTarget);
//   //we can stop the event propagation
//   // e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('container', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('nav', e.target, e.currentTarget); //e.target is clicked element //current target is actual element
//   }
//   // true //when we gives true then events are handled  in capturing phase
// );

//DOM traversing

const h1 = document.querySelector('h1');

//going downwards: child
console.log(h1.querySelectorAll('.highlight')); // it returns all childs of h1 with .hightlight class
console.log(h1.childNodes); //retuns all childs of h1
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

//going upwards : parents
console.log(h1.parentNode);
console.log(h1.parentElement);

//✅element.closest() The closest() method searches up the DOM tree for the closest element which matches a specified CSS selector. It starts at the element itself, then tests the parent, grandparent, and so on until a match is found. If a match is not found, this method returns null.
h1.closest('.header').style.background = 'var (--gradient-secondary)';
h1.closest('h1').style.background = 'var (--gradient-primary)';

//going sideways
console.log(h1.previousElementSibling); //The previousElementSibling property returns the previous element of the specified element, in the same tree level.
console.log(h1.nextElementSibling);
