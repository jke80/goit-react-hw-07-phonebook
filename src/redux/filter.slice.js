import { createSlice } from "@reduxjs/toolkit";


  
  const contactsInitialState = '';

  const filterSlice = createSlice({
    name: 'filter',
    initialState: contactsInitialState,
    reducers: {
        setFilter(_, {payload}){
            return payload;
        }, 
    },

});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;