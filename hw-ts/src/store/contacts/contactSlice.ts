import { createAsyncThunk, createSlice, createEntityAdapter} from "@reduxjs/toolkit";
import axios from "axios";

type Contact = {
    id: number;
    name: string;
    username: string;
    phone: string;
}

export const contactsAdapter = createEntityAdapter<Contact>();

type State = ReturnType<typeof contactsAdapter.getInitialState> & {
    error: string | null;
};

const initialState: State = contactsAdapter.getInitialState({
    error: null,
});

export const fetchContacts = createAsyncThunk<Contact[]>(
    'contacts/fetchContacts',
    async () => {
        const response = await axios.get<Contact[]>('https://jsonplaceholder.typicode.com/users');
        return response.data;
    }
);

export const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: contactsAdapter.addOne,
        deleteContact: contactsAdapter.removeOne,
    },
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.fulfilled, (state, { payload }) => {
                contactsAdapter.upsertMany(state, payload);
                state.error = null;
            })
            .addCase(fetchContacts.rejected, (state) => {
                state.error = "Failed to fetch contacts.";
            });
    }
});

export const { addContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;