import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "./slices/booksSlice";

export const store = configureStore({
    devTools: true,
    reducer: {
        books: booksReducer,
    }
})

