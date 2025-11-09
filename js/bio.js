$(document).ready(function() {
    
    function checkMembers() {
        $('.member-row').each(function() {
            const itemTop = $(this).offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();
            
            if (windowBottom > itemTop + 100) {
                $(this).addClass('visible');
            }
        });
    }
    
    $(window).scroll(function() {
        checkMembers();
    });
    
    checkMembers();
    
    $('.member-row').hover(
        function() {
            $(this).find('.member-description').stop().animate({
                paddingLeft: '1.5rem'
            }, 200);
        },
        function() {
            $(this).find('.member-description').stop().animate({
                paddingLeft: '0'
            }, 200);
        }
    );

});