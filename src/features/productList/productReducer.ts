import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {productsApi} from "../../api/api";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (param, thunkAPI) => {
    const res = await productsApi.getProducts()
    return {products: res.data}
})

export type ProductType = {
    _id: string
    id: number
    img: string
    description: string
}
const initialState: ProductType[] = []

export const slice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchProducts.fulfilled, (state, action)=>{
            return action.payload.products
        })
    }
})

export const productsReducer = slice.reducer
