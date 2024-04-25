// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
var romanToInt = function(s) {
    const arr = s.split("");
  var result = 0;
  const filtered = arr.map((i) =>
    i == "I"
      ? 1
      : i == "V"
      ? 5
      : i == "X"
      ? 10
      : i == "L"
      ? 50
      : i == "C"
      ? 100
      : i == "D"
      ? 500
      : i == "M"
      ? 1000
      : null
  );
  for (let x = 0; x < arr.length; x++) {
    if (
      (arr[x] == "I" && (arr[x + 1] == "V" || arr[x + 1] == "X")) ||
      (arr[x] == "X" && (arr[x + 1] == "L" || arr[x + 1] == "C")) ||
      (arr[x] == "C" && (arr[x + 1] == "D" || arr[x + 1] == "M"))
    ) {
      result -= filtered[x];
    } else {
      result += filtered[x];
    }
  }
  return result
};
