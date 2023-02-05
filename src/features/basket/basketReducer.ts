import {createSlice} from "@reduxjs/toolkit";

type PriceType = number | null
type BookingType = {
    name: string,
    surname: string,
    address: string,
    phone: string
}
const initialState = {
    price: null as PriceType,
    booking: {} as BookingType
}

export const slice = createSlice({
    name: 'basket',
    initialState: initialState,
    reducers: {}
})

export const basketReducer = slice.reducer