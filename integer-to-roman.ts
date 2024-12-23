// I	1
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000

function intToRoman(num: number): string {
  let roman = '';

  const romanValues: { value: number; symbol: string }[] = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' },
  ];

  for (const romanValue of romanValues) {
    const count = Math.floor(num / romanValue.value);
    num -= count * romanValue.value;
    roman += romanValue.symbol.repeat(count);
  }

  return roman;
}

console.log(intToRoman(3749)); // "MMMDCCXLIX"
