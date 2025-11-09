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
    
    
    $('.tracklist-toggle').on('click', function() {
        var albumCard = $(this).closest('.album-col');
        var albumId = albumCard.find('.album-card').data('album-id');
        
        $('#tracklist-' + albumId).stop().slideToggle(400); 
        
        if ($(this).text() === 'VIEW TRACKLIST') {
            $(this).text('HIDE TRACKLIST');
        } else {
            $(this).text('VIEW TRACKLIST');
        }
    });

});