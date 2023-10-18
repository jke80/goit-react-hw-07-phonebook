
import { ContactListStyled } from './ContactListStyled';
import { Contact } from 'components/Contact/Contact';
import { selectFilteredContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  
  const contacts = useSelector(selectFilteredContacts);
    
  return (
    <ContactListStyled>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ContactListStyled>
  );
};