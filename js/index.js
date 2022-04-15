console.log("TESTING TESTING TESTING");

/* DISABLED 
// $('button').hover(function(){
//     $(this).css({"border":'6px solid #0d1321', "background-color": '#F2AF29'});
// $('a').hover(function(){
//         $(this).css({"color": "#0d1321", "font-weight": "bold", "text-decoration": "none" });
//     });
// }); */

$("button").hover(function(){
    $(".button__Link").addClass("hover__ButtonText");
    $("button").addClass("hover__State");
});

$("button").mouseleave(function(){
    $(".button__Link").removeClass("hover__ButtonText");
    $("button").removeClass("hover__State");
});
