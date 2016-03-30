

var img = [ 'bownarrow', 'bownarrow', 'crown', 'crown', 'dog','dog', 'flag',
'flag', 'libra', 'libra', 'soccer', 'soccer', 'pizza', 'pizza', 'party', 'party'];


function rand() {
    return (Math.round(Math.random())-0.5);
};

function addImg() {
  img.sort(rand);
  $('.row .card div div').each(function(x, val) {
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
      $('.row .card div div').addClass('opacity');
      $('.row .card div').addClass('facedown');
    }, 750);
    addImg();
  });
  restartGame();
};


function playGame() {
  if ($('.active').length === 2){
    if ($($('.active')[0]).css('background') === $($('.active')[1]).css('background')) {
      $('.active').slideUp();
      $('.check').removeClass('unmatched');
      $('.check').addClass('match');
      $('.match').removeClass('active');
    } else if ($($('.active')[0]).css('background') !== $($('.active')[1]).css('background')){
        $('.row .card div .unmatched').addClass('opacity');
        $('.row .card div .unmatched').parent().addClass('facedown');
        $('.active').removeClass('active');
    }
  };
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
