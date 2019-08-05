/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  const result = [];
  const filterUsers = data.filter(item => item.age <= age);

  filterUsers.forEach(item => result.push(`${item.name}, ${item.balance}`));
  return result.join('\n');
}
