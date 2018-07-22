//enables data toggle tooltip
$(document).ready(function() {
    $("body").tooltip({ selector: '[data-toggle=modal]' });
});

//checks window size on load and applies the correct class for the collapsed nav underline.
$( window ).width(function() {
  if ($(window).width() < 991) {
    $('.nav-item').removeClass( "nav-item" ).addItemClass("nav-item-mini");
  }
});

//checks window size on window resize and applies correct class if navbar-collapse.
$( window ).resize(function() {
    if ($(window).width() < 991) {
     $('.nav-item').removeClass( "nav-item" ).addItemClass( "nav-item-mini" );
   } else if ($(window).width() > 991) {
     $('.nav-item-mini').addItemClass( "nav-item" ).removeClass('nav-item-mini');
   }
});


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

// //targets the "add to cart button"
var $form = $('.order'),
    $summands = $form.find('.qty'),
    $sumDisplay = $('#itemCount');

$form.delegate('.qty', 'change', function ()
{
    var sum = 0;
    $summands.each(function ()
    {
        var value = Number($(this).val());
        if (!isNaN(value)) sum += value;
    });
    $(".addItem").click(function() {
      $sumDisplay.html(sum);
    });
});
