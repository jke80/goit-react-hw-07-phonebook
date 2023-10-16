
import React from 'react';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts.thunk';
import { getContacts } from 'redux/selectors';

// import { getContacts } from './Redux/selectors';


// const TEST_CONTACTS = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const LS_KEY = 'savedContacts';

export const App = () => {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem(LS_KEY)) ?? TEST_CONTACTS
  // );
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  
  //  useEffect(() => {
  //   try {
  //     localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  //   } catch (err) {
  //     console.error('Set state error: ', err.message);
  //   }
  // }, [contacts]);
  
  
  useEffect(()=>{
    dispatch(fetchContacts());
  },[dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        // fontSize: 40,
        color: '#010101',
     }}
    >
      <h1>Phonebook</h1>
      <Form />
      {!!contacts?.length && <Filter />}
      {!!contacts?.length && <h2>Contacts</h2>}
      <ContactList />
    </div>
  );
};
