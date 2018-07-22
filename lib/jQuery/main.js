//enables data toggle tooltip
$(document).ready(function() {
    $("body").tooltip({ selector: '[data-toggle=modal]' });
});

//checks window size on load and applies the correct class for the collapsed nav underline.
$( window ).width(function() {
  if ($(window).width() < 991) {
    $('.nav-item').removeClass( "nav-item" ).addClass("nav-item-mini");
  }
});

// -------------------------------------fixes underline based on window resize-----------

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

// -------------------------------------MODAL---------------------------

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

// ---------------------------------------CART-----------------------------

// //targets the "order" form"
var $form = $('.order'),
  //variable for targeting all the ".qty" input class using "find"
    $summands = $form.find('.qty'),
    //variable for cart item count update
    $sumDisplay = $('#itemCount');

//looks for a change in the ".qty" input field
$form.delegate('.qty', 'change', function ()
{
  //looks for every ".qty" input
    var sum = 0;
    $summands.each(function ()
    {
      //looks at the input value of all ".qty" fields
        var value = Number($(this).val());
        //makes sure it is a number
        if (!isNaN(value)) sum += value;
    });
    //only adds to the cart count if the user presses "add to cart"
    $(".addItem").click(function() {
      $sumDisplay.html(sum);
    });
});



// -------------------------Cart
/* Set rates + misc */
var taxRate = 0.05;
var shippingRate = 15.00;
var fadeTime = 300;


/* Assign actions */
$('.product-quantity input').change( function() {
  updateQuantity(this);
});

$('.product-removal button').click( function() {
  removeItem(this);
});


/* Recalculate cart */
function recalculateCart()
{
  var subtotal = 0;

  /* Sum up row totals */
  $('.product').each(function () {
    subtotal += parseFloat($(this).children('.product-line-price').text());
  });

  /* Calculate totals */
  var tax = subtotal * taxRate;
  var shipping = (subtotal > 0 ? shippingRate : 0);
  var total = subtotal + tax + shipping;

  /* Update totals display */
  $('.totals-value').fadeOut(fadeTime, function() {
    $('#cart-subtotal').html(subtotal.toFixed(2));
    $('#cart-tax').html(tax.toFixed(2));
    $('#cart-shipping').html(shipping.toFixed(2));
    $('#cart-total').html(total.toFixed(2));
    if(total == 0){
      $('.checkout').fadeOut(fadeTime);
    }else{
      $('.checkout').fadeIn(fadeTime);
    }
    $('.totals-value').fadeIn(fadeTime);
  });
}


/* Update quantity */
function updateQuantity(quantityInput)
{
  /* Calculate line price */
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.product-price').text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;

  /* Update line price display and recalc cart totals */
  productRow.children('.product-line-price').each(function () {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice.toFixed(2));
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });
}


/* Remove item from cart */
function removeItem(removeButton)
{
  /* Remove row from DOM and recalc cart total */
  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function() {
    productRow.remove();
    recalculateCart();
  });
}
