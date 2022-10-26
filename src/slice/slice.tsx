import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store';
import { IProducts } from '../types'

  const initialProd:IProducts[] = [
    {
      title: 'Груша',
      price: 5,
      id: 1,
    },
    {
      title: 'Яблоко',
      price: 10,
      id: 2,
    },
    {
      title: 'Морковка',
      price: 20,
      id: 3,
    },
    {
      title: 'Лук',
      price: 30,
      id: 4,
    },
    {
      title: 'Чеснок',
      price: 40,
      id: 5,
    },
  ]
  
  const prodSlice = createSlice({
    name:'products',
    initialState: initialProd,
    reducers: {
      addProducts: (state, action: PayloadAction<IProducts>) => {
        return [action.payload, ...state]
      }
    }
  })
  
  export const { addProducts } = prodSlice.actions
  
  export const getProductsSelector = (state: RootState) => state.prodSlice
  
  export default prodSlice.reducer;