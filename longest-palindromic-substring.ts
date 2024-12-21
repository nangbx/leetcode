function countCharacters(words: string[], chars: string): number {
  const charMap: Record<string, boolean> = Object.create(null);

  for (const char of chars) {
    charMap[char] = true;
  }
  let count = 0;
  for (const w of words) {
    let canbeFormed = true;
    for (const char of w) {
      if (!charMap[char]) {
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

console.log(countCharacters(['hello', 'world', 'leetcode'], 'welldonehoneyr')); // 10
