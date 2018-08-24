//enables data toggle tooltip
window.onload = function() {

}
$(document).ready(function() {
    $("body").tooltip({ selector: '[data-toggle=modal]' });
});

//checks window size on load and applies the correct class for the collapsed nav underline.
window.onload = function() {
  const nav = document.querySelectorAll('.nav-item');
  if (window.innerWidth < 991) {
    for(i=0; i<nav.length; i++){
    nav[i].classList.replace('nav-item', 'nav-item-mini');
    }
  }
};

//fixes underline based on window resize-----------
window.addEventListener('resize', function() {
  setTimeout(function() {
  let nav = document.querySelector('.nav-item');
  let mini = document.querySelector('.nav-item-mini');
    if (window.innerWidth < 991) {
      nav.classList.add('nav-item-mini');
      nav.classList.remove("nav-item")
    } else if(window.innerWidth > 991) {
      mini.classList.add('nav-item');
      mini.classList.remove('nav-item-mini');
    }
    },1000)
  });

// $(document).ready(function() {
//   //checks window size on window resize and applies correct class if navbar-collapse.
//   $( window ).resize(function() {
//       if ($(window).width() < 991) {
//        $( '.nav-item' ).removeClass( "nav-item" ).addClass( "nav-item-mini" );
//      } else if ($(window).width() > 991) {
//        $( '.nav-item-mini' ).addClass( "nav-item" ).removeClass( 'nav-item-mini' );
//      }
//   });
// });

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

// ----------------------------CART ICON-----------------------------

// //targets the "order" form"
var $form = $('.order'),
  //variable for targeting all the ".qty" input class using "find"
    $qtyRequest = $form.find('.qty'),
    //variable for cart item count update
    $sumDisplay = $('#itemCount');

//looks for a change in the ".qty" input field
$form.delegate('.qty', 'change', function ()
{
  //looks for every ".qty" input
    var sum = 0;
    $qtyRequest.each(function ()
    {
      //looks at the input value of all ".qty" fields
        var value = Number($(this).val());
        //makes sure it is a number
        if (!isNaN(value)) sum += value;
    });
    //only adds to the cart count if the user presses "add to cart"
    $(".addItem").click(function() {
      $sumDisplay.html(sum);
      return false;
    });
});



// -------------------------Cart fill------------------------------------------------------

$(document).ready(function addToCart(e) {
    $('.addItem').click(function(e) {
        var pos = $('.coffeeTitle').text();
        var pic = $('#coffee1 #coffeePic1').attr('src');
        var des = $('.coffeeDesc1').text();
        var cnt = $('.qty').val();
        $('#cart').find('#cartProduct').html(pos);
        $('#cart').find('#cartPic').html('<div class="col-sm-2 hidden-xs" id="cartPic"><img src='+pic+' alt="..." class="cart-img"/></div>');
        $('#cart').find('#cartDesc').html(des);
        $('#cart').find('#cartQty').val(cnt);
        return false;
    });
});

function remove() {
  remove = document.querySelector('.removeProduct');
  remove.addEventListener('click', remove(this.parentElement.parentElement))
}

//item removal on button click
// $('.removeProduct').click( function() {
//   //defines what will be removed, the button, and its 2 parent rows that contain item data.
//   var productRow = $(this).parent().parent();
//   //executes the command to remove the defining variable above.
//   productRow.remove();
// });



$('.addItem').on('click', function(e){
  // isolate instance
   var $row = $(this).parent();
       // look inside instance for values
      var pos = $('.coffeeTitle').text();
      var pic = $('#coffee1 #coffeePic1').attr('src');
      var des = $('.coffeeDesc1').text();
      var cnt = $('.qty').val();

      if(cnt >= 1 ){
        $('#cart').find('#cartProduct').html(pos);
        $('#cart').find('#cartPic').html('<div class="col-sm-2 hidden-xs" id="cartPic"><img src='+pic+' alt="..." class="cart-img"/></div>');
        $('#cart').find('#cartDesc').html(des);
        $('#cart').find('#cartQty').val(cnt);
        return false;
      }
});
