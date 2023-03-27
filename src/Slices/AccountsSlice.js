import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  accountlist : [],
  global : {}
}

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    setAccounts : (state, action) => {
      const { accountlist, global } = action.payload
      state.accountlist = accountlist;
      state.global = global
    }
  }
})

export const { setAccounts } = accountsSlice.actions;
export default accountsSlice.reducer;
