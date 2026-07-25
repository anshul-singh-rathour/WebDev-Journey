'use strict';

// // Advance DOM manuplation

// // we can select the entire document
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// // we can also select one element
// const header =document.querySelector('.header');
// console.log(header);
// // also we can select multiple
// const allsections =document.querySelectorAll('.section');
// console.log(allsections);
// document.getElementById('section--1');
// // update dom automatically if something deleted 
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);
// // collection of classes
// console.log(document.getElementsByClassName('btn'));
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // creating and inseting elemnets
// // .insertAdjacentHTML
//  const message = document.createElement('div');
//  message.classList.add('cookie-message');
// //  sets only text written
// //  message.textContent='We use cookied for everything';

// // set all the thing written inside a block or element
//  message.innerHTML='We use cookied for improved functions<button class="btn btn--close-cookie">Got it!</button>';

// //  insert at the beginning of the element (in the element)
// // header.prepend(message);
// // insert at the end of the elementm (in the element)
// header.append(message);
// // make copy and insert it again
// // header.append(message.cloneNode(true));

// // insert before and after the element start (out of the element)
// // header.before(message);
// // header.after(message);

// // delete elements
// document.querySelector('.btn--close-cookie').addEventListener('click',function(){
//   message.remove();
// });
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Styles
// message.style.backgroundColor='#37383d';
// message.style.width='120%';

//  console.log(message.style.color);
//  console.log(message.backgroundColor);

//  console.log(getComputedStyle(message).color);// do not get not inline styles
//  console.log(getComputedStyle(message).height);//get inline and defined styles

// //  get any style and update it
//  message.style.height=Number.parseFloat(getComputedStyle(message).height,10)+40+'px';

// // we can directly change the css variable in the root element
// document.documentElement.style.setProperty('--color-primary', 'orangered ');

// // also acess atributes of the element
//  const logo = document.querySelector('.nav__logo');
//   console.log(logo.alt);
//   console.log(logo.src);
//   console.log(logo.className);// these are standard attributes of the element
//   // we can also set the attributes of the element
//   logo.alt='Beautiful minimalist logo';
//   // non standard attributes
//   console.log(logo.designer);// undefined
//   console.log(logo.getAttribute('designer'));// get the attribute value
//   logo.setAttribute('company','Bankist');// set the attribute value

//   // we can also get the relative path of the element
//   console.log(logo.src);// absolute path
//   console.log(logo.getAttribute('src'));// relative path
  
//   // data attributes
//   console.log(logo.dataset.versionNumber);
  
//   // classes
//   logo.classList.add('c','j');
//   logo.classList.remove('c','j');
//   logo.classList.toggle('c');
//   logo.classList.contains('c');// not includes

//   // don't use this it will override all the classes
//   // logo.className='jonas';  

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const btnScrollTo = document.querySelector('.btn--scroll-to'); 
// const section1 = document.querySelector('#section--1');
// btnScrollTo.addEventListener('click',function(e){
//   // gives the co-ordinates of the element in accoding to the viewport
// const s1coords = section1.getBoundingClientRect();
// console.log(s1coords);
// // gives the co-ordinates of the element clicked in accoding to the viewport
// console.log(e.target.getBoundingClientRect());

// // gives the current scroll position of the page 
// // means it gives the distance from the top of the page to the viewport 
//  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

//  // gives the height and width of the viewport
//  console.log('height/width viewport', document.documentElement.clicentHeight, document.documentElement.clientWidth);

// // scrolling
// window.scrollTo(s1coords.left+window.pageXOffset,s1coords.top+window.pageYOffset);

// scrolling method 2
// window.scrollTo({
//   left:s1coords.left+window.pageXOffset,
//                 top:s1coords.top+window.pageYOffset,
//                 behavior : "smooth"
// })

// modern method
    // section1.scrollIntoView({behavior:"smooth"});
// });

// const alertH1=function(){
//   alert("y ou Hover above me");

// we can also remove the addEventListener
// h1.removeEventListener('mouseenter',alertH1);

// };
// const h1 = document.querySelector('h1');
// trigger whenever mouse hover it 
// h1.addEventListener('mouseenter',function(){
//   alert("y ou Hover above me");
// });
// old method 
// h1.onmouseenter=function(e){
//   alert("you Hover above me     b");
// } 
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// h1.addEventListener('mouseenter',alertH1);
// // we can remove any where at any time
// setTimeout(()=>h1.removeEventListener('mouseenter',alertH1),3000);

// bubbling and capturing in HTML
// randowm color
// const randomInt = function(min,max){
//  return Math.floor(Math.random()*(max-min+1)+min);
// }
// const randomColor = ()=>`rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;

// document.querySelector('.nav__link').addEventListener('dblclick',function(e){
//   this.style.backgroundColor=randomColor();
//   console.log('triggr',e.target,e.currentTarget);
//   console.log(e.currentTarget===this);
//   e.stopPropagation();
// })
// document.querySelector('.nav__links').addEventListener('click',function(e){
//   this.style.backgroundColor=randomColor();
//   console.log('figr',e.target,e.currentTarget);
//   console.log(e.currentTarget===this);
// })
// document.querySelector('.nav').addEventListener('dblclick',function(e){
//   this.style.backgroundColor=randomColor();
//   console.log('liggr',e.target,e.currentTarget);
//   console.log(e.currentTarget===this);
// },true);
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// page navigation
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click',function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior:'smooth'});
//   });
// });
// better way of doing page navigation
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // traversig into the dom
// const h1 = document.querySelector('h1');
// // give all the child nodes of h1 with prefered class other element with same class and not child of h1 are not selected
// console.log(h1.querySelectorAll('.highlight'));
// // we can also select all the child element
// console.log(h1.childNodes);
// // live usefull and direct child give a collection 
// console.log(h1.children);
// // first and last child element 
// h1.firstElementChild.style.color='white';
// h1.lastElementChild.style.color='orangered';

// // going upward parent
// console.log(h1.parentNode);//give parent node
// console.log(h1.parentElement); //give parent element
// // go to any parent
// h1.closest('.header').style.background = 'var(--gradient-secondary)0';
// // give the element itself is find closedst same
// h1.closest('h1').style.background='var(--gradient-primary)';
// // going to the siblings 
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// // nodes
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// // all siblings
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function(el){
//     if(el !==h1) el.style.transform= 'scale(0.5)'
// });

// tabs.forEach(tab=>tab.addEventListener('click',function (e){
// }))

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// actual project

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to'); 
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');



const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn=> btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// button scrolling 
btnScrollTo.addEventListener('click',function(){
section1.scrollIntoView({behavior:"smooth"});
});


// page navigation
// select parent to apply bubbling
document.querySelector('.nav__links').addEventListener('click',function(e){
    e.preventDefault();
    // match if click happen at accurate place
    if (e.target.classList.contains('nav__link')){
          const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth'});
    }
  });


//   tabbed components

tabsContainer.addEventListener('click',function(e){
    const clicked = e.target.closest('.operations__tab');
    // guard clause
    if (!clicked) return ;
    
    tabs.forEach(t=> t.classList.remove('operations__tab--active'));
     tabsContent.forEach(content=> content.classList.remove('operations__content--active'));   
    // active tab 
    clicked.classList.add('operations__tab--active');
    // activate content area
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});


// menu fade animation

const handleHover = function(e){
    if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el=> {
        if(el!==link) el.style.opacity = this;
    })
    logo.style.opacity=this;
}
}
nav.addEventListener('mouseover',handleHover.bind(0.5));

nav.addEventListener('mouseout',handleHover.bind(1));
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


