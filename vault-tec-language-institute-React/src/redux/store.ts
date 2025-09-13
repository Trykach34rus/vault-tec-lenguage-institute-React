import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import userReducer from './slices/userReducer'

const preloadedState = localStorage.getItem(
	'vault-tec-lenguage-institute-React'
)
	? JSON.parse(
			localStorage.getItem('vault-tec-lenguage-institute-React') as string
	  )
	: {}

const rootReducer = combineReducers({
	user: userReducer,
})

export const store = configureStore({
	reducer: rootReducer,
	preloadedState,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

store.subscribe(() => {
	localStorage.setItem(
		'vault-tec-lenguage-institute-React',
		JSON.stringify(store.getState())
	)
})
