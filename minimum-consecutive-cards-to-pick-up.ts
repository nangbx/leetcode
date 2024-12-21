function minimumCardPickup(cards: number[]): number {
  const cardMap = Object.create(null);
  let min = cards.length;
  for (let i = 0; i < cards.length; i++) {
    if (cardMap[cards[i]]) {
      min = Math.min(min, i + 1 - cardMap[cards[i]]);
      cardMap[cards[i]] = i + 1;
    } else {
      cardMap[cards[i]] = i + 1;
    }
    console.log(cardMap);
  }

  return min === cards.length ? -1 : min + 1;
}

console.log(minimumCardPickup([1, 0, 5, 3])); // 4
