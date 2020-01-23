/**
 * In a deck of cards, every card has a unique integer.  
 * You can order the deck in any order you want.

Initially, all the cards start face down (unrevealed) in one deck.

Now, you do the following steps repeatedly, until all cards are revealed:

Take the top card of the deck, reveal it, and take it out of the deck.
If there are still cards in the deck, put the next top card of the deck at the bottom of the deck.
If there are still unrevealed cards, go back to step 1.  Otherwise, stop.
Return an ordering of the deck that would reveal the cards in increasing order.

The first entry in the answer is considered to be the top of the deck.
 */
var deckRevealedIncreasing = function(deck) {
  let newDeck = []
  deck.sort((a,b)=> a - b)
  console.log(deck)
  
  while (deck.length){
      
      //taking the end of array and placing it the beginning
      newDeck.unshift(deck.pop())
    
      //taking the new array and rearranging the last element and placing it in the beginning 
      newDeck.unshift(newDeck.pop())
  }
  newDeck.push(newDeck.shift())
  return newDeck
};
