import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit'
import { authSlice } from './authSlice'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage'

interface PersistConfig {
	key: string
	storage: any
	whitelist?: string[]
}

export const persistConfig: PersistConfig = {
	key: 'root',
	storage: localStorage,
	whitelist: ['auth'],
}

const rootReducer = combineReducers({
	[authSlice.name]: authSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)
