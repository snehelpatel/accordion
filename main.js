// function handler (event) {
//   var target= $(event.target);
//   if (target.is("slide-up")) {removeClass(".cont")
//
//   }
// }



function accordionHandler (event) {
  var target= $(event.target);
  if (target.is("#one")) {
    $( ".box1" ).toggleClass( "hidden-cont" );
    $(".box2").removeClass("hiddent-cont");
    $(".box3").removeClass("hiddent-cont");
  } else if (target.is("#two")) {
    $( ".box2" ).toggleClass( "hidden-cont" );
    $(".box1").removeClass("hiddent-cont");
    $(".box3").removeClass("hiddent-cont");
  } else if (target.is("#three")) {
    $( ".box3" ).toggleClass( "hidden-cont" );
    $(".box2").removeClass("hiddent-cont");
    $(".box1").removeClass("hiddent-cont");

}};

$(".slide-up").click(accordionHandler)

// $(".slide-up").click(
//   function() {
//     $( ".cont" ).toggleClass( "hidden-cont" );
//   }
// )
//
// }
