//enables data toggle tooltip


$(document).ready(function() {
    $("body").tooltip({ selector: '[data-toggle=modal]' });
});

//checks window size on load and applies the correct class for the collapsed nav underline.
window.onload = function() {
  let nav = document.querySelectorAll('.nav-item');
  if (window.innerWidth < 991) {
    for(i=0; i<nav.length; i++){
    nav[i].classList.replace('nav-item', 'nav-item-mini');
    }
  }
}

//checks window size on load and applies the correct class for the collapsed nav underline.
<<<<<<< HEAD
window.addEventListener('resize', function(){
=======
window.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('resize', function(){
>>>>>>> cb849d0015313fd6aa31a4764fadc5f80576f4e8
    let nav = document.querySelector('.nav-item')
    let mini = document.querySelector('.nav-item-mini')
    if(window.width < 991) {
      nav.replace("nav-item", "nav-item-mini");
    } else if(window.width >991) {
      mini.replace('nav-item-mini', 'nav-item');
    }
  })

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

// -------------------------=-----fixes underline based on window resize-----------

$(document).ready(function() {
  //checks window size on window resize and applies correct class if navbar-collapse.
  $( window ).resize(function() {
      if ($(window).width() < 991) {
       $( '.nav-item' ).removeClass( "nav-item" ).addClass( "nav-item-mini" );
     } else if ($(window).width() > 991) {
       $( '.nav-item-mini' ).addClass( "nav-item" ).removeClass( 'nav-item-mini' );
     }
  });
});

// ----------------------------------MENU-MODAL---------------------------

//updating modal menu dropdown
var menu = [
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
]

$(".menuType").change(function(){
  //targets menuType
	var ourMenu = $(this).val();
  //default return
	var options =  '<option value="">Entree</option>';
  //initializes menu array above
	$(menu).each(function(index, value){
    //returns the entree value if name == ourMenu dropdown selection
		if(value.name == ourMenu){
    //returns the value and entree name for the entree selection dropdown
			options += '<option value="'+value.entree+'">'+value.entree+'</option>';
		}
	});
  //update entree
	$('.entree').html(options);
});

$(document).on("change",'#product-select-option-0', function() { 
  var productquantity = $('#quantity').attr('value');
    if  (productquantity == 0) {
        $('#add-to-cart').prop('disabled', true);
      }
})

// ----------------------------CART ICON-----------------------------

// //targets the "order" form"
var order = $('.order'),
  //variable for targeting all the ".qty" input class using "find"
    $qtyRequest = order.find('.qty'),
    //variable for cart item count update
    $sumDisplay = $('#itemCount');

//looks for a change in the ".qty" input field
order.delegate('.qty', 'change', function ()
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

var order = $('.order'),
  //variable for targeting all the ".qty" input class using "find"
    $qtyRequest = order.find('.qty'),
    //variable for cart item count update
    $sumDisplay = $('#itemCount');

//looks for a change in the ".qty" input field
order.delegate('.qty', 'change', function ()
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
        var siz = $('.size').val();
        $('#cart').find('#cartProduct').html(pos);
        $('#cart').find('#cartPic').html('<div class="col-sm-2 hidden-xs" id="cartPic"><img src='+pic+' alt="..." class="cart-img"/></div>');
        $('#cart').find('#cartDesc').html(des);
        $('#cart').find('#cartQty').val(cnt);
        $('#cart').find('#cartSize').val(siz);
        return false;
    });
});

//item removal on button click
$('.removeProduct').click( function() {
  //defines what will be removed, the button, and its 2 parent rows that contain item data.
  var productRow = $(this).parent().parent();
  //executes the command to remove the defining variable above.
  productRow.remove();
});
