$(document).ready(function() {
    $("body").tooltip({ selector: '[data-toggle=tooltip]' });
});


$( window ).resize(function() {
    if ($(window).width() < 991) {
     $('.nav-item').removeClass( "nav-item" ).addClass( "nav-item-mini" );
   } else if ($(window).width() > 991) {
     $('.nav-item-mini').addClass( "nav-item" ).removeClass('nav-item-mini');
   }
});
