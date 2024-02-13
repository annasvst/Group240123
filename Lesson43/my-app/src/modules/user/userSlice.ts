import { createSlice } from '@reduxjs/toolkit'
import { UserData } from './models'

interface UserSliceState {
  user: UserInitialState
}

interface UserInitialState {
  loggedIn: boolean
  userData: UserData
}

const initialState: UserInitialState = {
  loggedIn: false,
  userData: {
    email: '',
    userName: '',
    password: '',
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logIn: (state) => {
      state.loggedIn = true
    },
    logOut: (state) => {
      state.loggedIn = false
    },
    updateUserData: (state, action) => {
      const { userName, email, password } = action.payload
      state.userData = { ...state.userData, userName, email, password }
    },
  },
})

export const { logIn, logOut, updateUserData } = userSlice.actions

export const userSelector = (state: UserSliceState) => state.user

export default userSlice.reducer
