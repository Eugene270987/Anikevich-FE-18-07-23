import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios';
import {createEntityAdapter} from "@reduxjs/toolkit";

export const contactsAdapter = createEntityAdapter();

const initialState = contactsAdapter.getInitialState();

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
    }
);

export const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addItem: contactsAdapter.addOne,
        deleteItem: contactsAdapter.removeOne,
    },
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.fulfilled, contactsAdapter.upsertMany)
            .addCase(fetchContacts.rejected, contactsAdapter.removeAll)
    }
});

export const {addItem, deleteItem} = contactSlice.actions;
export default contactSlice.reducer;


/*
export default function contactSlice(state = initialState, action) {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                data: [...state.data, action.payload],
            };

        case DELETE_CONTACT:
            return {
                ...state,
                data: state.data.filter((contact) => contact.name !== action.payload),
            };

        default:
            return state;
    }
}*/
