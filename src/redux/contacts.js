import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContacts: (state, action) => {
      state.items = action.payload;
    },
    addContacts: (state, { payload: item }) => {
      state.items = [item, ...state.items];
    },
    deleteContact: (state, { payload }) => {
      state.items = state.items.filter(item => item.id !== payload);
    },
  },
});

export const { addContacts, deleteContact, setContacts } =
  contactsSlice.actions;

export default contactsSlice.reducer;
