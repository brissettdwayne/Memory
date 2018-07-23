var img = [ 'bownarrow', 'bownarrow', 'crown', 'crown', 'dog','dog', 'flag',
'flag', 'libra', 'libra', 'soccer', 'soccer', 'pizza', 'pizza', 'party', 'party'];


function rand() {
    return (Math.round(Math.random())-0.5);
};

function addImg() {
  img.sort(rand);
  $('.rows .cards .imp div').each(function(x, val) {
      $(this).addClass(img[x] + ' unmatched');
    });
};


function restartGame() {
  $('#restart').click(function() {
    location.reload();
  });
}

function showCards() {
  $('#play').on('click', function() {
    setTimeout(function(){
      $('.rows .cards .imp div').addClass('opacity');
      $('.rows .cards .imp div').parent().addClass('facedown');
    }, 750);
    addImg();
    $('#play').css('pointer-events', 'none');
  });
  restartGame();

};


function playGame() {
  if ($('.active').length === 2){
    if ($($('.active')[0]).css('background') === $($('.active')[1]).css('background')) {
      $('.active').slideUp();
      $('.active').removeClass('unmatched');
      $('.active').addClass('match');
      $('.match').removeClass('active');
      $('.match').css('pointer-events', 'auto');
    } else if ($($('.active')[0]).css('background') !== $($('.active')[1]).css('background')){
      setTimeout(function () {
        $(".rows .cards .imp .unmatched").addClass('opacity');
        $('.rows .cards .imp .unmatched').parent().addClass('facedown');
      }, 500);
        $(this).removeClass('match');
        $('.active').removeClass('active');
        $(this).css('pointer-events', 'auto');
    }
  };
  if ($('.match').length === 16) {
    $('p').css('font-size', '16px').text('YOU WIN!');
  }
};


  function theFlip() {
    $('.check').on('click', function(e) {
      $(this).toggleClass('opacity');
      $(this).addClass('active');
      $(this).parent().toggleClass('facedown');
      playGame();
    });
  };


$(document).ready(function() {
    showCards();
    theFlip();
});
