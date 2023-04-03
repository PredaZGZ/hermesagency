import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  url : "http://localhost:4000"
}

const constantsSlice = createSlice({
  name: 'constants',
  initialState,
  reducers: {
    
  }
})

export default constantsSlice.reducer;
