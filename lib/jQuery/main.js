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

//checks window size on window resize and applies correct class if navbar-collapse.
$( window ).resize(function() {
    if ($(window).width() < 991) {
     $('.nav-item').removeClass( "nav-item" ).addClass( "nav-item-mini" );
   } else if ($(window).width() > 991) {
     $('.nav-item-mini').addClass( "nav-item" ).removeClass('nav-item-mini');
   }
});


https://stackoverflow.com/questions/41906235/populate-one-dropdown-list-based-on-another-dropdown-list
var diction = {
  Breakfast: ["B1", "B2", "B3"],
  Lunch: ["B4", "B5", "B6"]
}

// bind change event handler
$('#A').change(function() {
  // get the second dropdown
  $('#B').html(
      // get array by the selected value
      diction[this.value]
      // iterate  and generate options
      .map(function(v) {
        // generate options with the array element
        return $('<option/>', {
          value: v,
          text: v
        })
      })
    )
    // trigger change event to generate second select tag initially
}).change()
