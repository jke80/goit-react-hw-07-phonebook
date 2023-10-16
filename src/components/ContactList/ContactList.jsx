
import { ContactListStyled } from './ContactListStyled';
import { Contact } from 'components/Contact/Contact';
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  
  const contacts = useSelector(getContacts);
    
  const filter = useSelector(getFilter);
    
  
    const filteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  
  return (
    <ContactListStyled>
      {filteredContacts().map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ContactListStyled>
  );
};