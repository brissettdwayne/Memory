//Need an array of imgs

//Need a counter for number of card flips set equal to zero

//Need to display imgs when the pages load

//Also directions need to be displayed when user hovers over that area

//Allow the user to only pick two cards

//Need a function to see if the cards the user picked matched or didnt match
var img = [ 'bownarrow', 'bownarrow-two', 'crown', 'crown-two', 'dog','dog-two', 'flag',
'flag-two', 'libra', 'libra-two', 'soccer', 'soccer-two', 'pizza', 'pizza-two', 'party', 'party-two'];


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

$(document).ready(function() {
    showCards();
    theFlip();
});
