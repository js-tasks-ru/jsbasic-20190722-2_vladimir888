/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
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
class ClearedTable {
  constructor(data) {
    this.el = document.createElement('table');
    this.el.classList.add('pure-table');
    this.data = data;

    const result = [];
    this.data.forEach(item => result.push(
      `<tr id="${item.id}">
      <td>${item.name}</td>
      <td>${item.age}</td>
      <td>${item.salary}</td>
      <td>${item.city}</td>
      <td><a href="#delete">X</a></td>
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
      <td></td>
      </tr>
    </thead>
    <tbody>${row}</tbody>
    `;

    this.el.addEventListener('click', event => this.deleteRow(event));
  }

  deleteRow(event) {
    const { target } = event;

    if (target.innerHTML !== 'X') return;

    const rowForDelete = target.closest('tr');
    const rowId = target.closest('tr').id;
    rowForDelete.remove();
    this.onRemoved(+rowId);
  }

  /**
   * Метод который выщывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
  onRemoved(id) {
    console.log(`Из таблицы удален пользователь ${id}`);
  }
}

window.ClearedTable = ClearedTable;
