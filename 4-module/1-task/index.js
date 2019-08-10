/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let friendsList = '';

  for (const prop of friends) {
    friendsList += `<li>${prop.firstName} ${prop.lastName}</li>`;
  }

  const result = document.createElement('ul');
  result.innerHTML = `${friendsList}`;
  return result;
}
