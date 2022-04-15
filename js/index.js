console.log("TESTING TESTING TESTING");

/* DISABLED 
// $('button').hover(function(){
//     $(this).css({"border":'6px solid #0d1321', "background-color": '#F2AF29'});
// $('a').hover(function(){
//         $(this).css({"color": "#0d1321", "font-weight": "bold", "text-decoration": "none" });
//     });
// }); */

$("button").hover(function(){
    $(this).addClass("hover__ButtonText");
    $(this).addClass("hover__State");
});

$("button").mouseleave(function(){
    $(this).removeClass("hover__ButtonText");
    $(this).removeClass("hover__State");
});
