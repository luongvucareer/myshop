import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
  isAuthPopupOpen: boolean
  isRegister: boolean
}

const initialState: AuthState = {
  isAuthPopupOpen: false,
  isRegister: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    openAuthPopup: (state, action) => {
      state.isAuthPopupOpen = true
      state.isRegister = action.payload === 'register'
    },
    closeAuthPopup: (state) => {
      state.isAuthPopupOpen = false
    }
  }
})

export const { openAuthPopup, closeAuthPopup } = authSlice.actions
export default authSlice.reducer
