// initialize AOS
AOS.init();

// counter on-scroll
var isAlreadyRun = false;

$(window).scroll( function(){

    $('.counter-show').each( function(i){

        var bottom_of_object = $(this).position().top + $(this).outerHeight() / 2;
        var bottom_of_window = $(window).scrollTop() + $(window).height();


        if( bottom_of_window > ( bottom_of_object + 20 )  ){
            if (!isAlreadyRun) {
                $('.count-number').each(function () {

                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 3500,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
            }
            isAlreadyRun = true;
        }
    });
});

// products tabs
$(document).ready(function (){
    $("#tabBtn-1").click(function (){
        $("#tabBtn-2, #tabBtn-3, #tabBtn-4, #tabBtn-5").removeClass();
        $("#tabBtn-1").addClass("active-tab");
    })
    // -----
    $("#tabBtn-2").click(function (){
        $("#tabBtn-1, #tabBtn-3, #tabBtn-4, #tabBtn-5").removeClass();
        $("#tabBtn-2").addClass("active-tab");
    })
    // -----
    $("#tabBtn-3").click(function (){
        $("#tabBtn-1, #tabBtn-2, #tabBtn-4, #tabBtn-5").removeClass();
        $("#tabBtn-3").addClass("active-tab");
    })
    // -----
    $("#tabBtn-4").click(function (){
        $("#tabBtn-1, #tabBtn-2, #tabBtn-3, #tabBtn-5").removeClass();
        $("#tabBtn-4").addClass("active-tab");
    })
    // -----
    $("#tabBtn-5").click(function (){
        $("#tabBtn-1, #tabBtn-2, #tabBtn-3, #tabBtn-4").removeClass();
        $("#tabBtn-5").addClass("active-tab");
    })
})

// Scroll to top button
//Get the button:
mybutton = document.getElementById("scrollTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}