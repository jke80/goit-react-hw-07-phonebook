import React from 'react';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts.thunk';
import { selectContacts, selectError, selectFilteredContacts, selectIsLoading } from 'redux/selectors';
import { Layout } from './Layout/Layout';
import { Loading } from './Loading/Loading';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <Form />
      {!!contacts?.length && <Filter />}
      {(isLoading && !error &&!!filteredContacts?.length&& <h2>Contacts <Loading/></h2>)||
      (isLoading && !error && <h2><Loading/></h2>)||
      (!!filteredContacts?.length && <h2>Contacts</h2>)} 
      
      <ContactList />
    </Layout>
  );
};
