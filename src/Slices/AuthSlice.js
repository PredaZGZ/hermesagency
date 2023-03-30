import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    id : "",
    name : "",
    email : "",
  }, 
  userToken: null, 
  lastLoginDate: "",
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setName : (state, action) => {
      state.user.name = action.payload;
    },
    setEmail : (state, action) => {
      state.user.email = action.payload;
    },
    setToken : (state, action) => {
      state.userToken = action.payload;
    },
    setId : (state, action) => {
      state.user.id = action.payload;
    },
    Logout : (state) => {
      state.user = {
        id : "",
        name : "",
        email : "",
      } 
      state.userToken = null
      sessionStorage.clear()
    },
    setLogin : (state, action) => {
      state.user = {
        id : action.payload._id,
        name : action.payload.name,
        email : action.payload.email,
      } 
      state.userToken = action.payload.token
    },
    setLoginDate : (state, action) => {
      state.lastLoginDate = action.payload
    }
  }
})

export const { setName, setEmail, setToken, setId, Logout, setLogin, setLoginDate } = authSlice.actions;
export default authSlice.reducer;
