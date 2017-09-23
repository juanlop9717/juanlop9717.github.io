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

    

    // Detect Browser

    var windowsList = ['Pocket PC', 'Windows', 'Win16', 'Win32', 'WinCE'];

    console.log(windowsList.indexOf(navigator.platform));

    if(windowsList.indexOf(navigator.platform)>-1){
        alert("Estamos en windows");
        $("#body").css("font-size", "1.2em")
    }

    else{
        alert("No estamos en windows");
    }

    // Hover Script
    $( "svg" ).hover(
      function() {
        $( this ).addClass( "hover-orange" );
        $("#aboutId1").addClass("hover-orange");
      }, function() {
        $( this ).removeClass( "hover-orange" );
      }
    );

    // Menu 

    $("#menu").click(function(){
        $(".mobile-menu2").slideDown();
    })

    $(".close-btn").click(function(){
        $(".mobile-menu2").hide(500);
    })

});
 $(window).on('load', function () {
     $(".loader").fadeOut();
 });

