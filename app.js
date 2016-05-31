
// DEAL A CARD
var deal = function () {
    card = Math.floor(Math.random()*52+1);
    return card;
},
// DEAL 2 CARDS
card1 = deal(),
card2 = deal(),
// CREATE 10 RULE FOR J,Q,K AND OTHER VALUE % 13
getValue = function(card) {
    if(card % 13 === 0 || card % 13 === 11 || card % 13 === 12) {
        return 10;
    } else {
        return card % 13;
    }
},
// RUN 10 RULE ON ANY J,Q,K
score = function() {
    return getValue(card1) + getValue(card2);
};

var BlackJack = function() {
	this.noOfDecks = 1;
	this.activeCards = [];
	this.inactiveCards = [];
	this.decks = [];
	this.init();
};
BlackJack.prototype.init = function() {
	//this.dealer = new Dealer();
	this.initCards();
	//this.shuffleCards(this.activeCards);
	console.log(this.activeCards);
};

BlackJack.prototype.initCards = function() {
	var deck;
	for(var i  = 0 ; i < this.noOfDecks; i += 1) {
		deck = new Deck();
		this.decks.push(deck);
		this.activeCards = this.activeCards.concat(deck.cards);
	}
};

BlackJack.prototype.shuffleCards = function(cards) {
	var test = cards;
	var r = [];
	var ln;
	var ranLn;
	
	while(test.length) {
		ln = test.length;
		ranLn = Math.floor(Math.random() * ln);
		r.push(test[ranLn]);
		test.splice(ranLn, 1);
	}
	this.activeCards = r;
	return r;
};



var Dealer = function() {

};
Dealer.prototype.dispatchCard = function() {

};
var Card = function(config) {
	this.ele = document.createElement('card');
	this.value = config.value || -1;
	this.type = config.type || null;
	this.hasUsed = false;

};
var Deck = function(config) {
	this.types = ['s', 'd', 'h', 'c'];
	this.noOfCards = config && config.noOfCards || 52;
	this.cards = [];
	this.init();
};

Deck.prototype.init = function() {
	this.cards = this.initCards();
};

Deck.prototype.initCards = function() {
	var card;
	var cards = [];
	for(var i = 0;  i < this.noOfCards / 4; i += 1) {
		for(var j = 0; j < this.types.length; j += 1) {
			card = new Card({
				value: i + 1,
				type: this.types[j]
			});
			cards.push(card);
		}
	}
	return cards;
};

Deck.prototype.getCards = function() {
	return this.cards;
};

// var deck = new Deck({
// 	noOfCards : 52
// });
// console.log(deck);

var blackJack = new BlackJack();

// var CardsHolder = function() {};
// var Player = function() {};
// var Rules = function() {};

// // PLAY TIME!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// console.log("You have cards " + card1 + " and " + card2 + " for a score of " + score() + "\n");
// console.log("But... we're finding the difference of 3 numbers. (0,11,12)");
// console.log("card1 value : " + card1);
// console.log("card2 value : " + card2 + " + " + card1 + " = " + (card1+card2));
// console.log("card1 getValue : " + getValue(card1));
// console.log("card2 getValue : " + getValue(card2));
// console.log("card2 value : " + getValue(card2) + " + " + getValue(card1) + " = " + (getValue(card1) + getValue(card2) ));
// console.log("Total val... : " + (getValue(card1) + getValue(card2) ) );
// console.log("\n Which EQUALS...");
// console.log("You have cards " + getValue(card1) + " and " + getValue(card2) + " for a score of " + score());