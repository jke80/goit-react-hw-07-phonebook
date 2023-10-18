import PropTypes from 'prop-types';

import { ContactStyled } from './ContactStyled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts.thunk';

// import { deleteContact } from 'components/Redux/actions';

export const Contact = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();

  const handelDelete = () => dispatch(deleteContact(id));

  return (
    <ContactStyled>
      <div>
        <div>
          <p>Name:</p>
          <span>{name}</span>
        </div>
        <div>
          <p>Number:</p>
          <span>{phone}</span>
        </div>
      </div>

      <button type="button" onClick={handelDelete}>
        delete
      </button>
    </ContactStyled>
  );
};

Contact.propType = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
