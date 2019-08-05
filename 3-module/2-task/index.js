/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  const obj = {};
  const result = [];
  const newArray = str.split(' ');
  const newString = newArray.join(',');
  const num = newString.split(',');
  for (const key of num) {
    if (!Number.isNaN(parseFloat(key))) {
      result.push(parseFloat(key));
    }
  }
  obj.min = Math.min(...result);
  obj.max = Math.max(...result);
  return (obj);
}
