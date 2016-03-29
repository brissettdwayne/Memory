//Need an array of imgs

//Need a counter for number of card flips set equal to zero

//Need to display imgs when the pages load

//Also directions need to be displayed when user hovers over that area

//Allow the user to only pick two cards

//Need a function to see if the cards the user picked matched or didnt match
var img = [ 'bownarrow', 'bownarrow', 'crown', 'crown', 'dog','dog', 'flag',
'flag', 'libra', 'libra', 'soccer', 'soccer', 'pizza', 'pizza', 'party', 'party'];


function rand() {
    return (Math.round(Math.random())-0.5);
};

function addImg() {
  img.sort(rand);
  $('.grid .card div div').each(function(x, val) {
      $(this).addClass(img[x]);
    });
};

// function hoverEffect() {
//   $('.grid .card').mouseenter(function(){
//     $(this).css('backgroundColor', 'pink');
//   });
//   $('.grid .card').mouseleave(function(){
//     $(this).css('backgroundColor', '#b69393');
//   });
// }

function restartGame() {
  $('#restart').click(function() {
    location.reload();
  });
}

function showCards() {
  $('#play').on('click', function() {
    setTimeout(function(){
      $('.grid .card div div').addClass('opacity');
      $('.grid .card div').addClass('class');
    }, 750)
    //hoverEffect();
    addImg();
  });
  restartGame();
};

//Flip each row on the grid
function theFlip() {
  $('.card div #flip-one').on('click', function() {
    $('.card div #flip-one').toggleClass('opacity');
    $('.card #show-one').toggleClass('class');
  });
  $('.card div #flip-two').on('click', function() {
    $('.card div #flip-two').toggleClass('opacity');
    $('.card #show-two').toggleClass('class');
  });
  $('.card div #flip-three').on('click', function() {
    $('.card div #flip-three').toggleClass('opacity');
    $('.card #show-three').toggleClass('class');
  });
  $('.card div #flip-four').on('click', function() {
    $('.card div #flip-four').toggleClass('opacity');
    $('.card #show-four').toggleClass('class');
  });
}

function theFlipTwo() {
  $('.card div #flip-five').on('click', function() {
    $('.card div #flip-five').toggleClass('opacity');
    $('.card #show-five').toggleClass('class');
  });
  $('.card div #flip-six').on('click', function() {
    $('.card div #flip-six').toggleClass('opacity');
    $('.card #show-six').toggleClass('class');
  });
  $('.card div #flip-seven').on('click', function() {
    $('.card div #flip-seven').toggleClass('opacity');
    $('.card #show-seven').toggleClass('class');
  });
  $('.card div #flip-eight').on('click', function() {
    $('.card div #flip-eight').toggleClass('opacity');
    $('.card #show-eight').toggleClass('class');
  });
}

function theFlipThree() {
  $('.card div #flip-nine').on('click', function() {
    $('.card div #flip-nine').toggleClass('opacity');
    $('.card #show-nine').toggleClass('class');
  });
  $('.card div #flip-ten').on('click', function() {
    $('.card div #flip-ten').toggleClass('opacity');
    $('.card #show-ten').toggleClass('class');
  });
  $('.card div #flip-eleven').on('click', function() {
    $('.card div #flip-eleven').toggleClass('opacity');
    $('.card #show-eleven').toggleClass('class');
  });
  $('.card div #flip-twelve').on('click', function() {
    $('.card div #flip-twelve').toggleClass('opacity');
    $('.card #show-twelve').toggleClass('class');
  });
}

function theFlipFour() {
  $('.card div #flip-thirteen').on('click', function() {
    $('.card div #flip-thirteen').toggleClass('opacity');
    $('.card #show-thirteen').toggleClass('class');
  });
  $('.card div #flip-fourteen').on('click', function() {
    $('.card div #flip-fourteen').toggleClass('opacity');
    $('.card #show-fourteen').toggleClass('class');
  });
  $('.card div #flip-fifteen').on('click', function() {
    $('.card div #flip-fifteen').toggleClass('opacity');
    $('.card #show-fifteen').toggleClass('class');
  });
  $('.card div #flip-sixteen').on('click', function() {
    $('.card div #flip-sixteen').toggleClass('opacity');
    $('.card #show-sixteen').toggleClass('class');
  });
}

$(document).ready(function() {
    showCards();
    theFlip();
    theFlipTwo();
    theFlipThree();
    theFlipFour();
});
