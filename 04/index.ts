// Literal types
const flipCoin = (): "Head" | "Tail" => (Math.random() < 0.5 ? "Head" : "Tail");
// console.log(flipCoin());

// Enum
enum Suit {
  HEARTS,
  SPADES,
  DIAMONDS,
  CLUBS,
}

// Literal Type with Unions
// type Suit = "hearts" | "spades" | "diamonds" | "clubs";

// console.log(Suit.HEARTS);
// console.log(Suit.SPADES);
// console.log(Suit.DIAMONDS);
// console.log(Suit.CLUBS);

const suitMeaning = (suit: Suit) => {
  if (Suit.HEARTS === suit) return "🂱 Holding a hearts cart.";
  if (Suit.SPADES === suit) return "🂡 Holding a spades cart.";
  if (Suit.DIAMONDS === suit) return "🃁 Holding a diamonds cart.";
  if (Suit.CLUBS === suit) return "🃑 Holding a clubs cart.";
  return null;
};

console.log(suitMeaning(Suit.HEARTS));
console.log(suitMeaning(Suit.SPADES));
console.log(suitMeaning(Suit.DIAMONDS));
console.log(suitMeaning(Suit.CLUBS));
