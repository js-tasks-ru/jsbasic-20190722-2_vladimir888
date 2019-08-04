/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  let result = 0;
  for (const key in obj) {
    result += 1;
  }
  if (result === 0) {
    return true;
  }
  return false;
}
