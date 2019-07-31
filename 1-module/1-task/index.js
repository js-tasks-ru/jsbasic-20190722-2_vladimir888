/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */

function pow() {
  const x = +prompt('Введите число.', 3);
  const n = +prompt('Введите степень.', 3);
  let result = 1;

  if ((Math.round(x) === x) && (Math.round(n) === n)) {
    for (let i = 0; i < n; i += 1) {
      result *= x;
    }
  }
  return alert(result);
}

pow();
