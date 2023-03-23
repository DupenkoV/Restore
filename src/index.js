import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from './components/app/App';
import ErrorBoundry from './components/error-boundry/ErrorBoundry';
import BookstoreService from './services/bookstore-service';
import { BookStoreServiceProvider } from './components/book-store-service-context/book-store-context'

import {store} from './store.js'

const bookstoreService = new BookstoreService()
const root = ReactDOMClient.createRoot(document.getElementById('root'))


root.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookStoreServiceProvider value={bookstoreService}>
                <Router>
                    <App />
                </Router>
            </BookStoreServiceProvider>
        </ErrorBoundry>
    </Provider>
)