//enables data toggle tooltip
$(document).ready(function() {
    $("body").tooltip({ selector: '[data-toggle=tooltip]' });
});

//checks window size on load and applies the correct class for the collapsed nav underline.
$( window ).width(function() {
  if ($(window).width() < 991) {
    $('.nav-item').removeClass( "nav-item" ).addClass("nav-item-mini");
  }
});

//checks window size on window resize and applies correct class if navbar-collapse.
$( window ).resize(function() {
    if ($(window).width() < 991) {
     $('.nav-item').removeClass( "nav-item" ).addClass( "nav-item-mini" );
   } else if ($(window).width() > 991) {
     $('.nav-item-mini').addClass( "nav-item" ).removeClass('nav-item-mini');
   }
});
