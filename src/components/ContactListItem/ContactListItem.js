import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

export default function ContactListItem({
  itemId,
  name,
  number,
  deleteContacts,
}) {
  return (
    <li className={css.item}>
      <p>{name}:</p>
      <p>{number}</p>
      {
        <button type="button" onClick={() => deleteContacts(itemId)}>
          Delete
        </button>
      }
    </li>
  );
}
ContactListItem.propTypes = {
  deleteContacts: PropTypes.func,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};
