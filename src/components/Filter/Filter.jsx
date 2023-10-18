import { FilterStyled } from './FilterStyled';
import { useDispatch, useSelector } from 'react-redux';
// import { setFilter } from 'components/Redux/actions';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filter.slice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  
  const handelChange = (e)=> dispatch(setFilter(e.target.value));
  
  
  return (
    <FilterStyled>
      Find contacts by name
      <input
        onChange={handelChange}
        value={filter}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </FilterStyled>
  );
};
