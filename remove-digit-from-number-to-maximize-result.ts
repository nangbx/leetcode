function removeDigit(number: string, digit: string): string {
  let largest = '';

  for (let i = 0; i < number.length; i++) {
    if (number[i] === digit) {
      const candidate = number.slice(0, i) + number.slice(i + 1);
      largest = candidate > largest ? candidate : largest;
    }
  }
  return largest;
}

console.log(removeDigit('123', '1')); // 23
