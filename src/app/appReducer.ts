import {createSlice} from "@reduxjs/toolkit";

export  type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type RequestErrorType = null | string

const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as RequestErrorType
}

export  const slice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {}
})

export const appReducer = slice.reducer