import React, { useState } from 'react';
import { FormStyled } from './FormStyled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'components/Redux/actions';
import {selectContacts } from 'redux/selectors';
import { addContact } from 'redux/contacts.thunk';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export const Form = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [state, setState] = useState(INITIAL_STATE);

  // state = { ...INITIAL_STATE };

  const handelChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handelSubmit = e => {
    const { name, number } = state;
    e.preventDefault();

    if (contacts.some(contact => contact.name === name)) {
      Notify.failure(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, phone: number }));
    Notify.success(`Contact ${name} added successfully`);
    setState(INITIAL_STATE);
  };

  return (
    <FormStyled onSubmit={handelSubmit}>
      <label>
        Name
        <input
          onChange={handelChange}
          value={state.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          onChange={handelChange}
          value={state.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </FormStyled>
  );
};
