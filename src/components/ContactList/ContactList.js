import React from 'react';
import css from './ContactList.module.css';
import ContactListItem from '../ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import {
  useGetContactsItemsQuery,
  useDeleteContactMutation,
} from 'redux/contactsApi';

const getVisibleContacts = (items, value) => {
  const normalizedFilter = value.toLowerCase().trim();
  return items.filter(item =>
    item.name.toLowerCase().includes(normalizedFilter)
  );
};

export default function ContactList() {
  const { data: items = [] } = useGetContactsItemsQuery();
  const filterValue = useSelector(state => state.filter.value);
  const filtredContacts = getVisibleContacts(items, filterValue);
  const [deleteContact] = useDeleteContactMutation();

  const handleDeleteContact = contactId => deleteContact(contactId);
  return (
    <ul className={css.list}>
      {filtredContacts.map(({ id, name, phone }) => (
        <ContactListItem
          key={id}
          name={name}
          number={phone}
          itemId={id}
          deleteContacts={handleDeleteContact}
        />
      ))}
    </ul>
  );
}
