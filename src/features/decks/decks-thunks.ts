import { decksApi } from './decks-api.ts'
import { addDeckAC, setDeckAC } from './decks-reducer.ts'
import type { AppDispatch, AppThunk } from '../../app/store.ts'

export const fetchDecksTC = (): AppThunk => (dispatch) => {
  decksApi.fetchDecks().then((res) => {
    const deckItems = res.data.items
    dispatch(setDeckAC(deckItems))
  })
}

export const addDecksTC = (name: string) =>
  async (dispatch: AppDispatch) => {
  const res = await decksApi.addDecks(name)
  const item = res.data
  dispatch(addDeckAC(item))
}