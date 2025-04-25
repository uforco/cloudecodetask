import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
    unique_id: string
  product: any
}

const initialState: CounterState = {
    unique_id: '',
    product: {},
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    saveByProduct: (state, action) => {
      state.product = action.payload
      state.unique_id = action.payload.unique_id
    },
  },
})

// Action creators are generated for each case reducer function
export const { saveByProduct } = productSlice.actions

export default productSlice.reducer