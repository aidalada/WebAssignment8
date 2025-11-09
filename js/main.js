$(document).ready(function() {
    $('.fade-in-element').fadeIn(1500); 

    $('.member-card').hover(
        function() {
            $(this).find('.member-name').stop().animate({
                opacity: 1,
                bottom: '0'
            }, 300); 
        },
        function() {
            $(this).find('.member-name').stop().animate({
                opacity: 0,
                bottom: '0'
            }, 300); 
        }
    );

});