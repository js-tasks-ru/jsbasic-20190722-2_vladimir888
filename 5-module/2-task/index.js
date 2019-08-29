/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
  /**
   * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
   */
  this.el = document.createElement('table');

  const result = [];
  items.forEach(item => result.push(
    `<tr>
    <td>${item.name}</td>
    <td>${item.age}</td>
    <td>${item.salary}</td>
    <td>${item.city}</td>
    </tr>`,
  ));
  const row = result.join('');

  this.el.innerHTML = `
  <thead>
    <tr>
    <td>Name</td>
    <td>Age</td>
    <td>Salary</td>
    <td>City</td>
    </tr>
  </thead>
  <tbody>${row}</tbody>`;

  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  this.sort = (column, desc = false) => {
    const forSort = Array.from(this.el.querySelectorAll('tbody>tr'));

    const sortRows = forSort
      .sort((row1, row2) => (row1.cells[column].innerHTML > row2.cells[column].innerHTML ? 1 : -1));

    if (desc) {
      sortRows.reverse();
    }

    const sortedRows = sortRows
      .map((el) => {
        const trHTML = el.outerHTML;

        return trHTML;
      })
      .join('');

    this.el.innerHTML = `
    <thead>
      <tr>
      <td>Name</td>
      <td>Age</td>
      <td>Salary</td>
      <td>City</td>
      </tr>
    </thead>
    <tbody>${sortedRows}</tbody>`;
  };
}
