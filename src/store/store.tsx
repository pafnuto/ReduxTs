import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import  prodSlice  from '../slice/slice'

const store = configureStore({
    reducer: {
      prodSlice
    }
  })
  
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store;