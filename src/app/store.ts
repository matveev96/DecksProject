import thunkMiddleware, { type ThunkAction, ThunkDispatch } from 'redux-thunk'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { decksReducer } from '../features/decks/decks-reducer.ts'
import { applyMiddleware, combineReducers, legacy_createStore, type UnknownAction } from 'redux'

const rootReducer = combineReducers({
  decksReducer,
})

export const store = legacy_createStore(rootReducer, {},applyMiddleware(thunkMiddleware))

export type AppRootState = ReturnType<typeof rootReducer>

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>
export type AppThunk = ThunkAction<void, RootState, unknown, UnknownAction>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector
