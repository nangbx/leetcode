function countCharacters(words: string[], chars: string): number {
  const charMap: Record<string, number> = Object.create(null);

  for (const char of chars) {
    charMap[char] = (charMap[char] || 0) + 1;
  }
  let count = 0;
  for (const w of words) {
    let canbeFormed = true;
    const charMapT = Object.assign({}, charMap);
    for (const char of w) {
      if (!charMap[char]) {
        canbeFormed = false;
        break;
      }
      charMapT[char]--;
      if (charMapT[char] < 0) {
        canbeFormed = false;
        break;
      }
    }
    if (canbeFormed) {
      count += w.length;
    }
  }
  return count;
}

console.log(countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach')); // 10
