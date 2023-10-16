
import React from 'react';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts.thunk';
import { getContacts } from 'redux/selectors';

export const App = () => {
  
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  
 useEffect(()=>{
    dispatch(fetchContacts());
  },[dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      {!!contacts?.length && <Filter />}
      {!!contacts?.length && <h2>Contacts</h2>}
      <ContactList />
    </div>
  );
};
