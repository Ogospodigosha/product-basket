import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {basketReducer} from "../features/basket/basketReducer";
import {appReducer} from "./appReducer";
import {productsReducer} from "../features/productList/productReducer";


const  rootReducer = combineReducers({
    basket: basketReducer,
    app: appReducer,
    products: productsReducer
})
export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})

export type RootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store