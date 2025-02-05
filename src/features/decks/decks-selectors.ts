import type { RootState } from '../../app/store.ts'
import type { DecksState } from './decks-reducer.ts'

export const selectDecks = (state: RootState): DecksState => state.decksReducer