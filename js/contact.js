$(document).ready(function() {
    
    let votes = {
        'OK Computer': 0,
        'Kid A': 0,
        'In Rainbows': 0,
        'The Bends': 0,
        'Amnesiac': 0,
        'Pablo Honey': 0
    };
    
    $('.album-vote').click(function() {
        const album = $(this).data('album');
        votes[album]++;
        
        $(this).find('.vote-count').text(votes[album] + ' votes');
        
        $(this).fadeOut(200).fadeIn(200);
    });

    $('#submitMessage').click(function() {
        const name = $('#fanName').val().trim();
        const message = $('#fanMessage').val().trim();
        
        if (name === '' || message === '') {
            alert('Please fill in both name and message!');
            return;
        }
        
        const newMessage = `
            <div class="fan-message" style="display:none;">
                <div class="message-header">
                    <strong>${name}</strong>
                    <span class="message-date">Just now</span>
                </div>
                <div class="message-text">${message}</div>
            </div>
        `;
        
        $('#messagesContainer').prepend(newMessage);
        $('.fan-message').first().fadeIn(500);
        
        $('#fanName').val('');
        $('#fanMessage').val('');
        
        alert('Message posted successfully!');
    });

    $('.quiz-option').click(function() {
        const answer = $(this).data('answer');
        
        $('.quiz-option').prop('disabled', true);
        
        if (answer === 'correct') {
            $(this).addClass('correct');
            $('#quizResult').html('🎉 Correct! You know your Radiohead!').css('color', '#27ae60');
        } else {
            $(this).addClass('wrong');
            $('.quiz-option[data-answer="correct"]').addClass('correct');
            $('#quizResult').html('❌ Wrong! The correct answer is 1997.').css('color', '#c0392b');
        }
        
        setTimeout(function() {
            $('.quiz-option').removeClass('correct wrong').prop('disabled', false);
            $('#quizResult').html('');
        }, 3000);
    });

});