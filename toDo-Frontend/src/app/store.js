import { configureStore } from '@reduxjs/toolkit'
import { loginApi } from '../../services/loginApi'
import { setupListeners } from '@reduxjs/toolkit/query'
export const store = configureStore({
    reducer:
    {
        [loginApi.reducerPath]: loginApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            loginApi.middleware,
        ),
})
setupListeners(store.dispatch)