/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  const statusCheck = table.querySelectorAll('tbody>tr>td:last-child');
  for (const elem of statusCheck) {
    if (elem.dataset.available === 'true') {
      elem.parentNode.classList.add('available');
    } else if (elem.dataset.available === 'false') {
      elem.parentNode.classList.add('unavailable');
    } else if (elem.dataset) {
      elem.parentNode.setAttribute('hidden', true);
    }
  }

  const genderCheck = table.querySelectorAll('tbody>tr>td:nth-child(3)');
  for (const elem of genderCheck) {
    if (elem.innerHTML === 'm') {
      elem.parentNode.classList.add('male');
    } else {
      elem.parentNode.classList.add('female');
    }
  }

  const ageCheck = table.querySelectorAll('tbody>tr>td:nth-child(2)');
  for (const elem of ageCheck) {
    if (elem.innerHTML < 18) {
      elem.parentNode.style.textDecoration = 'line-through';
    }
  }
}
