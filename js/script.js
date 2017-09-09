$(document).ready(function() {

   
    // Effects Between Pages Script
    $("body").css("display", "none");
 
    $("body").fadeIn(1000);
 
    $("a").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").slideUp(800, redirectPage);     
    });
         
    function redirectPage() {
        window.location = linkLocation;
    }

    // Hover Script


    // Menu 

    $("#menu").click(function(){
        $(".mobile-menu2").slideDown();
    })

    $(".close-btn").click(function(){
        $(".mobile-menu2").hide(500);
    })

});
 $(window).on('load', function () {
       $(".loader").hide(500);
 });

