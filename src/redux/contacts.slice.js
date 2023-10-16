import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from 'redux/contacts.thunk';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};
console.log('contactslice');

const contactsSlice = createSlice({
  name: 'contacts/fetchAll',
  initialState: contactsInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
       console.log('panding');
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;

//   reducers: {
//     addContact: {
//       reducer(state, {payload}) {
//         state.push(payload);
//       },
//       prepare({ name, number }) {
//         return {payload: { name, number, id: nanoid() }};
//       },
//     },
//   deleteContact(state, { payload }) {
//     return state.filter(contact => contact.id !== payload);
//   },
// },
