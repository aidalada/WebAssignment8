$(document).ready(function() {
    
    $('.filter-btn').click(function() {
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        
        const filter = $(this).data('filter');
        
        if (filter === 'all') {
            $('.tour-item').fadeIn();
        } else {
            $('.tour-item').hide();
            $('.tour-item[data-region="' + filter + '"]').fadeIn();
        }
    });

    $('.btn-tickets').click(function() {
        alert('Tickets coming soon!');
    });

});