import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import choosedProductsState from "./choosedProductsState";
import customerDetailsState from "./customerDetailsState";
import {HYDRATE, createWrapper} from "next-redux-wrapper";
import {combineReducers} from "@reduxjs/toolkit";

const allReducers = combineReducers({
    choosedProductsState,
    customerDetailsState
});




const makeStore = () => {
    return configureStore({
        reducer: {
            allReducers
        },
        devTools: process.env.NODE_ENV !== 'production',
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [HYDRATE],
            }
        }),
    });
}

export const wrapper = createWrapper(makeStore, {debug: true});