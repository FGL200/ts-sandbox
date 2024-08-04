/**
 * Make a number array.
 * @param a First value or Array length
 * @param b Last value (Not included)
 * @param c incrementation
 * @returns 
 */
const range = (a?: number, b?: number, c?: number) => {
  if (a && b && c) {
    let length = Number(String((b - a) / c)[0]);
    return Array(length).fill(0).map((_, i) => i + 1).map(v => v * c)
  }
  else if (a && b) {
    return Array(b - a).fill(0).map((_, i) => i).map(v => v + a);
  } else if (a) {
    return Array(a).fill(0).map((_, i) => i).map(v => v);
  }
  return [] as Number[];
}

console.log({
  one: range(5),
  two: range(5, 10),
  three: range(1, 10, 3),
});
