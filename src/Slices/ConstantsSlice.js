import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  url : "http://192.168.1.108:4000"
}

const constantsSlice = createSlice({
  name: 'constants',
  initialState,
  reducers: {
    
  }
})

export default constantsSlice.reducer;
