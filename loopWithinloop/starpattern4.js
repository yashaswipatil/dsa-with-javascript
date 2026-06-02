//*print 1
//*      22
//*      333
//*      444
//*      5555

let n = 5;
for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j <= i; j++) {
    row = row + [i + 1];
  }
  console.log(row);
}
