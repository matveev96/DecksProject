import { decksApi } from './decks-api.ts'
import { setDeckAC } from './decks-reducer.ts'
import { Dispatch } from 'redux'
import type { RootState } from '../../app/store.ts'

export const fetchDecksThunk = (dispatch: Dispatch, getState: () => RootState) => {
  decksApi.fetchDecks().then((res) => {
    const deckItems = res.data.items
    dispatch(setDeckAC(deckItems))
  })
}

