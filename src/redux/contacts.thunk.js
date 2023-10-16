import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://652ce295d0d1df5273efcded.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
  try {
      const response = await axios.get("/contacts");
      return response.data;

  }catch(e){

    return thunkAPI.rejectWithValue(e.message);
  } 
  
});

