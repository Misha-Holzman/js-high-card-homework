const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const deck = [];
let player1Card = null;
let player2Card = null;


function buildDeck() {
values.forEach(function(value) {
suits.forEach(function(suit) {
    let card = [{suit: suit, value: value,}];
    deck.push(card);
})})};



// function getPlayerName() {
//   let player1 = prompt(`Add player 1's name and hit <enter>`)
//   let player2 = prompt(`Add player 2's name and hit <enter>`)
// }




function dealCardsToPlayers() {
  player1Card = Math.floor(Math.random() * deck.length); 
  let removeCard1 = deck.splice(player1Card, 1)
  player2Card = Math.floor(Math.random() * deck.length);
  let removeCard2 = deck.splice(player2Card, 1)
};



function announceCards() {
	let message = '';

	if (player1Card == true) {
	    let message = `Player 1 is showing the ${player1Card.card.value} of ${player1Card.card.suit}! 
	    Player 2 is showing the ${player2Card.card.value} of ${player2Card.card.suit}!`
	} 

	console.log(message);
}



function cardToRank(card) {
	switch(cardToRank) {
  		case deck[0]: 
  		case deck[1]:
  		case deck[2]:
  		case deck[3]:
  			let cardRank = 2
    		break;
  		case deck[4]: 
  		case deck[5]:
  		case deck[6]:
  		case deck[7]:
  			let cardRank = 3    	
  			break;
  		case deck[8]: 
  		case deck[9]:
  		case deck[10]:
  		case deck[11]:
  			let cardRank = 4
  			break;
  		case deck[12]: 
  		case deck[13]:
  		case deck[14]:
  		case deck[15]:
  			let cardRank = 5
  			break;
  		case deck[16]: 
  		case deck[17]:
  		case deck[18]:
  		case deck[19]:
  			let cardRank = 6
  		case deck[20]: 
  		case deck[21]:
  		case deck[22]:
  		case deck[23]:
  			let cardRank = 7   	
  			break;
  		case deck[24]: 
  		case deck[25]:
  		case deck[26]:
  		case deck[27]:
  			let cardRank = 8
  			break;
  		case deck[28]: 
  		case deck[29]:
  		case deck[30]:
  		case deck[31]:
  			let cardRank = 9
  			break;
  		case deck[32]: 
  		case deck[33]:
  		case deck[34]:
  		case deck[35]:
  			let cardRank = 10

  			break;
  		case deck[36]: 
  		case deck[37]:
  		case deck[38]:
  		case deck[39]:
  			let cardRank = 11
  		  	break;
  		case deck[40]: 
  		case deck[41]:
  		case deck[42]:
  		case deck[43]:
  			let cardRank = 12
  		  	break;
  		case deck[44]: 
  		case deck[45]:
  		case deck[46]:
  		case deck[47]:
  			let cardRank = 13
  		  	break;
  		case deck[48]: 
  		case deck[49]:
  		case deck[50]:
  		case deck[51]:
  			let cardRank = 14
  		default:
}
}


function announceWinner() {
	if (player1Card > player2Card) {
		console.log(`Player 1 wins!`)
	} else if (player2Card < player1Card) {
		console.log(`Player 2 wins!`)
	} else {
		console.log(`It's a tie!`)
	}
}

function returnCardsToDeck() {
	player1Card.splice(deck, 1);
	player2Card.splice(deck, 1);
}

function playGame() {
  // getPlayerName()
  dealCardsToPlayers();
  announceCards();
  announceWinner();
  returnCardsToDeck();
}

buildDeck();
playGame();