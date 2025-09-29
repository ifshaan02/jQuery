// $(document).ready(function(){
//     $("h1").css("color", "red");
// });

// $("h1").addClass("big-title margin-50");
// $("h1").removeClass("big-title")

// $("h1").hasClass("big-title");

// $("h1").text("Bye");

// $("button").text("Don't click me");

// $("button").html("<em>Hey</em>")

// console.log($("img").attr("src"))

// $("a").attr("href", "https://www.youtube.com");

// $("h1").click(function(){
//     $("h1").css("color", "purple");
// });

// $("button").click(function(){
//     $("h1").css("color", "purple");
// });

// $(document).keydown(function(event){
//     $("h1").text(event.key);
// });

// $("h1").on("mouseover", function(){
//     $("h1").css("color", "purple");
// });

$("button").on("click",function(){
    // $("h1").hide();
    // $("h1").toggle();
    // $("h1").fadeOut();
    // $("h1").fadeToggle();
    // $("h1").animate({opacity: 0.5});
    // $("h1").animate({margin: "20%"});
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});