// ALAB 316.1.1: DOM Manipulation (Part One) 
// Menu data structure 

// data structure to create menu buttons. 
var menuLinks = [ 
   { text: 'about', href: '/about' }, 
   { text: 'catalog', href: '/catalog' }, 
   { text: 'orders', href: '/orders' }, 
   { text: 'account', href: '/account' }, 
 ]; 
 
// Part 1: Getting Started 

document.addEventListener('DOMContentLoaded', () => {
   // 1.	Select and cache the <main> element in a variable named mainEl. 
   const mainEl = document.querySelector('main');

   // Get the value of the --main-bg CSS custom property
   const mainBgColor = getComputedStyle(document.documentElement).getPropertyValue('--main-bg').trim();

   //2. Set the background color of mainEl
   mainEl.style.backgroundColor = mainBgColor;

   //3. Set the content using innerHTML
   mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

   //4. Add the class "flex-ctr" to mainEl
      mainEl.classList.add('flex-ctr');
});


//Part 2: Creating a Menu Bar 
document.addEventListener('DOMContentLoaded', () => {
   // 1.Select and cache the <nav id="top-menu"> element in a variable named topMenuEl
   const topMenuEl = document.getElementById('top-menu');

   //2. Set the height of the topMenuE1 element to be 100%.
   topMenuEl.style.height = '100%';

   //3. Set the background color of topMenuEl 
   //to the value stored in the --top-menu-bg CSS custom property
   const topMenuBgColor = getComputedStyle(document.documentElement).getPropertyValue('--top-menu-bg').trim();
   topMenuEl.style.backgroundColor = topMenuBgColor;
   
   //4. Add the class "flex-around" to topMenuEl
   topMenuEl.classList.add('flex-around');
});


//Part 3: Adding Menu Buttons
/*Iterate over the entire menuLinks array and for each "link" object: 
   1.	Create an <a> element. 
   2.	On the new element, add an href attribute with its value set to the href property of the "link" object. 
   3.	Set the new element's content to the value of the text property of the "link" object. 
   4.	Append the new element to the topMenuEl element. 
*/

//1. Create an <a> element.
document.addEventListener('DOMContentLoaded', () => {
   const topMenuEl = document.getElementById('top-menu');
   for(i = 0; i < menuLinks.length; i++){
      let aElement = document.createElement("a");
      topMenuEl.appendChild(aElement);
   }
});

