
$(document).ready(function() {
  $("body").tooltip({ selector: '[data-toggle=modal]' });
});

//Starts function on Window Load
window.onload = function() {
//Targets the .full-size class and returns all of them in an array.
const nav = document.querySelectorAll('.full-size');
//Loops through the array
for(i=0; i<nav.length; i++){
  //Checks to see if the Window is less than 991px wide
  if (window.innerWidth < 991) {
    //applices the nav-item-mini class if it is less than 991px wide
    nav[i].classList.replace('full-size', 'nav-item-mini');
    }
  }
};

//fixes underline based on window resize-----------
//Looks for the user to resize the window
window.addEventListener('resize', function() {
//Sets timeout delay on the function so it isn't always running during the resize
setTimeout(function() {
  //Targets the classes to replace
let nav = document.querySelector('.full-size');
let mini = document.querySelector('.nav-item-mini');
//Checks window size
  if (window.innerWidth < 991) {
    //targets the Nav variable and replaces the current class with mini
    nav.classList.replace('full-size', 'nav-item-mini');
  //Runs if the window size is greater than 991px
  } else if(window.innerWidth > 991) {
    //targets the Mini variable and replaces the current class with Nav
    mini.classList.replace('nav-item-mini', 'full-size');
  }
  //Timeout delay
  },300)
});
// ----------------------------------MENU-MODAL---------------------------

//updating modal menu dropdown
const menu = [
{name: 'Breakfast', entree: 'Rice Mushrooms Eggs N\' Sausage'},
{name: 'Breakfast', entree: 'Chocolate Coconut Pancakes'},
{name: 'Breakfast', entree: 'Crying River Eggs N\' Rice'},
{name: 'Breakfast', entree: 'Sausage N\' Eggs Taco'},
{name: 'Breakfast', entree: 'The Simpleton'},
{name: 'Breakfast', entree: 'Skyscraper French Toast'},
{name: 'Lunch', entree: 'Fitzcarraldo'},
{name: 'Lunch', entree: 'Turkey Ham N\' Turkey'},
{name: 'Lunch', entree: 'The Mound'},
{name: 'Lunch', entree: 'De-Light'},
{name: 'Lunch', entree: 'It\'s Never too Late'},
{name: 'Lunch', entree: 'Goodnight Sweet Prince'},
];

//initialize the fields when the Menu type is selected
document.querySelector('.menuType').addEventListener('change', function(){
//Menu value
const menuType = document.querySelector('.menuType').value;
//html update target
let meal = document.querySelector('.entree');
//HTML default value for the above target
let options = '<option value="">Select your entree</option>';
//Itterates through the Menu Object array above
for (let index = 0; index < menu.length; index++) {
  //Grabs the index of the array object and assignes it to Element.
    const element = menu[index];
    //verifying menu type / name (Breakfast or Lunch)
    if (element.name === menuType) {
      //Concats the Entree name and text to the value and innerHTML of the default Options Variable above.
      options +='<option value="'+element.entree+'">'+element.entree+'</option>';
    }
  }
  //updates the meal variable to the object array value;
  meal.innerHTML = options;
});

// // //targets the "order" form"
// var $form = $('.order'),
// //variable for targeting all the ".qty" input class using "find"
//   $qtyRequest = $form.find('.qty'),
//   //variable for cart item count update
//   $sumDisplay = $('#itemCount');

// //looks for a change in the ".qty" input field
// $form.delegate('.qty', 'change', function ()
// {
// //looks for every ".qty" input
//   var sum = 0;
//   $qtyRequest.each(function ()
//   {
//     //looks at the input value of all ".qty" fields
//       var value = Number($(this).val());
//       //makes sure it is a number
//       if (!isNaN(value)) sum += value;
//   });
//   //only adds to the cart count if the user presses "add to cart"
//   $(".addItem").click(function() {
//     $sumDisplay.html(sum);
//     return false;
//   });
// });



// -----------------Cart fill and Cart Icon-------------------------------------
function shoppingCart(){
  const add = document.querySelectorAll('.addItem');
  add.forEach(function(item){
    console.log(item);
  })
    // for (let i = 0; i < add.length; i++) {
    //   add[i].addEventListener('click', function(e){
    //     const test = document.querySelector('.coffeeDesc1');
    //     console.log(test[i]);
        
      }
shoppingCart();







//Remove from cart
//selects the Delete icon in the shopping cart and listens for a click event.
document.querySelector('.removeProduct').addEventListener('click', function(){
  //targets the delete icons parent element and its parent element.
  const productRow = this.parentElement.parentElement;
  //removes the target above from the cart.
  productRow.remove();
})

