//enables data toggle tooltip
$(document).ready(function () {
	$("body").tooltip({
		selector: '[data-toggle=modal]'
	});
});




// checks window size on load and applies the correct class for the collapsed nav underline.
$(document).ready(function () {
	//checks window size on window resize and applies correct class if navbar-collapse.
	$(window).resize(function () {
		if ($(window).width() < 991) {
			$('.nav-item').removeClass("nav-item").addClass("nav-item-mini");
		} else if ($(window).width() > 991) {
			$('.nav-item-mini').addClass("nav-item").removeClass('nav-item-mini');
		}
	});
});




// -------------------------=-----fixes underline based on window resize-----------
$(document).ready(function () {
	//checks window size on window resize and applies correct class if navbar-collapse.
	$(window).resize(function () {
		if ($(window).width() < 991) {
			$('.nav-item').removeClass("nav-item").addClass("nav-item-mini");
		} else if ($(window).width() > 991) {
			$('.nav-item-mini').addClass("nav-item").removeClass('nav-item-mini');
		}
	});
});



// ----------------------------------MENU-MODAL---------------------------
//updating modal menu dropdown
var menu = [{
	name: 'Breakfast',
	entree: 'Rice Mushrooms Eggs N\' Sausage'
}, {
	name: 'Breakfast',
	entree: 'Chocolate Coconut Pancakes'
}, {
	name: 'Breakfast',
	entree: 'Crying River Eggs N\' Rice'
}, {
	name: 'Breakfast',
	entree: 'Sausage N\' Eggs Taco'
}, {
	name: 'Breakfast',
	entree: 'The Simpleton'
}, {
	name: 'Breakfast',
	entree: 'Skyscraper French Toast'
}, {
	name: 'Lunch',
	entree: 'Fitzcarraldo'
}, {
	name: 'Lunch',
	entree: 'Turkey Ham N\' Turkey'
}, {
	name: 'Lunch',
	entree: 'The Mound'
}, {
	name: 'Lunch',
	entree: 'De-Light'
}, {
	name: 'Lunch',
	entree: 'It\'s Never too Late'
}, {
	name: 'Lunch',
	entree: 'Goodnight Sweet Prince'
}, ]
$(".menuType").change(function () {
	//targets menuType
	var ourMenu = $(this).val();
	//default return
	var options = '<option value="">Select your entree</option>';
	//initializes menu array above
	$(menu).each(function (index, value) {
		//returns the entree value if name == ourMenu dropdown selection
		if (value.name == ourMenu) {
			//returns the value and entree name for the entree selection dropdown
			options += '<option value="' + value.entree + '">' + value.entree + '</option>';
		}
	});
	//update entree
	$('.entree').html(options);
});




// -------------------------Cart fill------------------------------------------------------
$('.addItem').click(function () {
	var coffee = $(this).parent().find('.card-title').text();
	var qty = $(this).parent().find('.qty').val();
	var siz = $(this).parent().find('.size').val();
	var desc = $(this).parent().find('.coffeeDesc').text();
  var pic = $(this).parent().parent().find(".pic").attr("src");
  //Checks to make sure the QTY value is more than 1 before adding it to the cart.
	if (qty >= 1) {
		$('.modalCart').prepend('<tr>' + '<td data-th="Product">' + '   <div class="row">' + '      <div class="col-sm-8">' + '         <h4 id="cartProduct">' + coffee + '</h4>' + '         <p id="cartDesc">' + desc + '</p>' + '      </div>' + '   </div>' + '</td>' + '<td data-th="Beans">' + '   <div class="row">' + '      <div class="col-sm-8 mr-4">' + '         <div class="hidden-xs" class="cart-img" id="cartPic"><img  class="cart-img" src="' + pic + '"/></div>' + '      </div>' + '   </div>' + '</td>' + '<td data-th="Size">' + '   <select id="cartSize" class="size form-control is-valid" value="" required>' + '      <option value="12oz" class="size" id="12oz">12oz</option>' + '      <option value="16oz" class="size" id="16oz">16oz</option>' + '      <option value="20oz" class="size" id="20oz">20oz</option>' + '      <div class="valid-feedback"></div>' + '   </select>' + '</td>' + '<td data-th="Quantity">' + '   <input type="number"' + '      id="cartQty" class="cartQty form-control text-center" value="' + qty + '">' + '</td>' + '<td class="actions" data-th="">' + '   <button class="removeProduct btn btn-danger"><i class="fas fa-trash-alt"></i></button>' + '	<button class="giftWrap btn btn-brown"><i class="fa fa-gift"></i></button>' + '</td>' + '</tr>');
	}
	//Updates the item size in the cart when placed.
	$('#cartSize').val(siz).change();
	//item removal on button click
	$('.removeProduct').click(function () {
		//defines what will be removed, the button, and its 2 parent rows that contain item data.
		var productRow = $(this).parent().parent();
		//executes the command to remove the defining variable above.
		productRow.remove();
		//Initiates a cart quantity refresh with the Cart Items function
		cartItems();
	});
	//Targets the cart quantity field and looks for a change
	$(".cartQty").on("change", cartItems = function () {
		var sum = 0;
		//targets the cart icon
		cartCount = $('.nav-item').find('#itemCount');
		//looks at all individual items in the cart
		$(".cartQty").each(function () {
			//Add the initial cart quantity to the SUM variable
			sum += +$(this).val();
		});
		//if the item quantity = 0, removes the text from the cart icon
		if (sum === 0) {
			//removes the cart icon cart total if the value = 0
			cartCount.text('');
		} else {
			//if the quantity is not 0, sets the cart quantity to the total cart quantity
			cartCount.text(sum);
		}
	});
	//Calls the "CartItems" function above on ".addItem" to initiate the cart icon quantity.
	cartItems();
	return false;
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
			e.preventDefault();

			document.querySelector(this.getAttribute('href')).scrollIntoView({
					behavior: 'smooth'
			});
	});
});