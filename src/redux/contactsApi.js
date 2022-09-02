import { setContacts } from 'redux/contacts';
export const fetchItems = dispatch => {
  fetch('https://6312580af5cba498da916c44.mockapi.io/api/v1/contacts')
    .then(res => res.json())
    .then(data => dispatch(setContacts(data)));
};
