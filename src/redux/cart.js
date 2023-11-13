import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    total: 0,
    cartdata: []

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart: (state, ) => {
            state.total = state.total + 1
        }
    }

})

export default cartSlice.reducer
export const { addToCart } = cartSlice.actions