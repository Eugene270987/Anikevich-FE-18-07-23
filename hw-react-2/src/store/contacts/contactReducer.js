import {ADD_CONTACT, DELETE_CONTACT} from "./action";

const initialState = {
    data: [],
};

export default function contactReducer(state = initialState, action) {
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
}