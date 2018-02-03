  $( function() {
    $( "#slider" ).slider({
      value:100,
      min: 0,
      max: 3000,
      step: 10,
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.value );
      }
    });
    $( "#amount" ).val( $( "#slider" ).slider( "value" ) + "€");
  } );