import React from "react";
import { BookStoreServiceConsumer } from "../book-store-service-context/book-store-context";

const withBookstoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BookStoreServiceConsumer>
                {
                    (bookstoreService) => {
                        return (<Wrapped {...props} 
                                         bookstoreService={bookstoreService}
                                />)
                    }
                }
            </BookStoreServiceConsumer>
        );
    };
};

export {withBookstoreService};