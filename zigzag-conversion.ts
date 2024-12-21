function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }

  let isGoingDown = true;
  const rows = new Array(numRows).fill('');
  let currentRow = 0;

  for (let i = 0; i < s.length; i++) {
    if (currentRow === numRows - 1 || (currentRow === 0 && i !== 0)) {
      isGoingDown = !isGoingDown;
    }
    rows[currentRow] += s[i];
    currentRow += isGoingDown ? 1 : -1;
  }
  return rows.join('');
}

console.log(convert('PAYPALISHIRING', 4)); // 'PAHNAPLSIIGYIR'
