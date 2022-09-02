import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  useCreateContactMutation,
  useGetContactsItemsQuery,
} from 'redux/contactsApi';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [createContact] = useCreateContactMutation();

  const { data: items = [] } = useGetContactsItemsQuery();

  const handleChangeName = e => setName(e.currentTarget.value);

  const handleChangePhone = e => setPhone(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      id: nanoid(),
      name,
      phone,
    };
    const sameName = items.map(item => item.name).includes(data.name);
    if (sameName) {
      alert(`${data.name} is already in contacts`);
    }
    createContact(data);
    setName('');
    setPhone('');
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor={nanoid()}>Name</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChangeName}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id={nanoid()}
      />
      <label htmlFor={nanoid()}>Telefon</label>
      <input
        type="tel"
        name="phone"
        value={phone}
        onChange={handleChangePhone}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        id={nanoid()}
      />
      <button type="submit">Add contact</button>
    </form>
  );
}
