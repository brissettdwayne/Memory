This project was very tricky in many different ways. Some of the major problems that I faced was
1. Whenever I clicked he lets play button, the game would add a bunch of different pictures to each div when I only wanted 1 picture there.
2. Another problem was that I couldn't get the cards to flip back over if they weren't a match.
3. I couldn't get the game to put 1 image to 1 div.
4. I couldn't get the card to stay face up to compare to another card.

The way that I fixed the first problem was I changed the pointer event to none when the play button was clicked
The way that I fixed the second problem was that I gave the card a class of active on click. When two cards get the class of active they would compare to each other and see if they do indeed match.
The way that I fixed the third problem was that I made an array of class names and I iterated them through using a for loop.
The way that I fixed the fourth problem was that I again used the pointer event style and set it to none every time a div had the class of active.
