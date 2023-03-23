import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, title: 'Production-Ready Microservices', author: 'Susan J. Fowler', price: 32, coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNAVIuV8rKVmFpYM1RNWR64HJXV6SFh_BUDQh7KvP_fBQjPu43' },
    { id: 2, title: 'Release It!', author: 'Michael T. Nygard', price: 40, coverImage: 'https://ir.ozone.ru/s3/multimedia-3/wc1000/6022287999.jpg' }
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
