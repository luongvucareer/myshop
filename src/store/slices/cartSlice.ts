import { createSlice } from '@reduxjs/toolkit'

interface CartState {
  items: { id: string; name: string; price: number; quantity: number }[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        state.items.push({ ...newItem, quantity: 1 })
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload
      const existingItem = state.items.find((item) => item.id === id)
      if (!existingItem) return
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id)
      } else {
        existingItem.quantity--
      }
    }
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
