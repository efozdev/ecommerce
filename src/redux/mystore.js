import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart'

export const mystore = configureStore({
  reducer: {
    cart: cartSlice
  }
})