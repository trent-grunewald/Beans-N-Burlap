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
window.addEventListener('resize', () => {
//Sets timeout delay on the function so it isn't always running during the resize
setTimeout( () => {
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


// MENU-MODAL
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
document.querySelector('.menuType').addEventListener('change', () => {
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

const coffee = [
  {title: 'Brazil Minas Gerais', description: 'Low in acidity with a heavy body; these characteristics are often complemented with sweet, chocolate and nutty flavours. ', size: '', qty:'',img:'lib/css/images/coffee1.jpg'},

  {title: 'Sulawesi-Kalosi', description: 'This Sulawesi Kalosi is exceptionally smooth with complex flavors of spice and herbs that are mingled with deep chocolate and caramel undertones. ', size: '', qty:'',img:'http://www.melbasfoodhall.com.au/wp-content/uploads/2018/01/coffee.jpg'},

  {title: 'Arabian Mocha-Java', description: 'The worlds most famous coffee blend, this combination of rich Mocha coffee from Arabia tempered with estate Java remains ', size: '', qty:'',img:'https://st2.depositphotos.com/3944627/8509/i/950/depositphotos_85092514-stock-photo-roasted-coffee-beans-with-burlap.jpg'},

  {title: 'Ethiopian Guji', description: 'This Guji is complex, beautifully fruity and aromatic, just like our fully washed Guji, but with all those classic natural process qualities.', size: '', qty:'',img:'https://static1.squarespace.com/static/5450c428e4b01ac0358a22cb/5571f5d7e4b00808365ea401/557c7ba1e4b02f16630b47aa/1518312883299/?format=500w'},

  {title: 'Arabian Mocha Sanani', description: 'Water process, complex, chocolaty notes. This ancient blend makes a distinguished decaf. ', size: '', qty:'',img:'https://us.123rf.com/450wm/amawasri/amawasri1501/amawasri150101032/35688739-studio-shot-of-coffee-beans-in-a-bag.jpg?ver=6'},

  {title: 'Sumatra Aceh Tengah', description: 'In contrast to the classic Sumatra profile dominated by notes of earth, cedar, and bell pepper, Ketiara’s coffees often feature fruit tones ', size: '', qty:'',img:'https://thumbs.dreamstime.com/b/roasted-coffee-beans-burlap-sack-fresh-coffee-beans-77431651.jpg'},

  {title: 'Kopi Luwak', description: 'Stale, average, plain old coffee for twenty times the price! Just buy Folgers... ', size: '', qty:'',img:'https://static1.squarespace.com/static/541a230ce4b0bb0e99120b6e/55c2bf4be4b02ce3fcfdb04f/5622e017e4b09501ec5a3976/1445126172168/kars-coffee-roasted-beans-in-burlap-bag.jpg?format=750w'},

  {title: 'Kona', description: '100% Kona Coffee beans from Hawaii\'s Kona Coast. Our Hawaiian Kona Coffee is selected from the best of the Kona Coffee harvests.', size: '', qty:'',img:'http://cdn.nhanongxanh.vn/wp-content/uploads/2018/07/3830_coffee_beans_bag_scoop_326070713_1200px.jpg'},

  {title: 'Costa Rican Tarrazu', description: 'Our medium roast, allows the caramelized sugars to rise to the surface of the beans and highlight a chocolaty flavor with surprising hints of citrusy grapefruit. ', size: '', qty:'',img:'http://www.nascas.si/wp-content/uploads/2018/03/kava.jpg'},
  ];

  
 
const addButtons = document.querySelectorAll('.addItem')
let qty = document.querySelector('.qty').value;
function addToCart(){
  for(let x = 0; x < addButtons.length; x++){
  addButtons[x].addEventListener('click', () => {
      console.log(addButtons[x].qty)
      //Concats the Entree name and text to the value and innerHTML of the default Options Variable above.
    // for (let z = 0; z < coffee.length; z++) {
    //   //Grabs the index of the array object and assignes it to Element.
    //     let element = coffee[z];
    //     console.log("hi")
    //     //verifying menu type / name (Breakfast or Lunch)
    //     }
      
    })
  }
}

addToCart();


//Remove from cart
//selects the Delete icon in the shopping cart and listens for a click event.
document.querySelector('.removeProduct').addEventListener('click', () =>{
  //targets the delete icons parent element and its parent element.
  const productRow = this.parentElement.parentElement;
  //removes the target above from the cart.
  productRow.remove();
})
