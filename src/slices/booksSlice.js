import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, title: 'Production-Ready Microservices', author: 'Susan J. Fowler' },
    { id: 2, title: 'Release It!', author: 'Michael T. Nygard' }
]

const booksSlice = createSlice({
    name: '@@books',
    initialState,
    reducers: {
        getBooks: (state, payload) => {
            state = payload
        }
    }
})

export const {getBooks} = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
