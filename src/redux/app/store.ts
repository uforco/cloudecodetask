import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from '../apis/productsApi'
import productReducer from '../features/products/productDetails'

export const makeStore = () => {
  return configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        product: productReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

