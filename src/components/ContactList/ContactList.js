import React from 'react';
import css from './ContactList.module.css';
import ContactListItem from '../ContactListItem/ContactListItem';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts';

const getVisibleContacts = (items, value) => {
  const normalizedFilter = value.toLowerCase().trim();
  return items.filter(item =>
    item.name.toLowerCase().includes(normalizedFilter)
  );
};
export default function ContactList() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.filter.value);
  const filtredContacts = getVisibleContacts(items, filterValue);
  const handleDeleteContact = itemId => dispatch(deleteContact(itemId));
  return (
    <ul className={css.list}>
      {filtredContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          itemId={id}
          deleteContacts={handleDeleteContact}
        />
      ))}
    </ul>
  );
}
