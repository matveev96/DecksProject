import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksApi } from '../decks-api.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { type DecksState, setDeckAC } from '../decks-reducer.ts'
import { type RootState, useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { selectDecks } from '../decks-selectors.ts'

export const DecksList = () => {

  const desks = useAppSelector(selectDecks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    decksApi.fetchDecks().then((res) => {
      const deckItems = res.data.items
      dispatch(setDeckAC(deckItems))
    })
  }, [])

  return (
    <ul className={s.list}>
      {desks.decks.map((deck) => (
        <DeckItem deck={deck} key={deck.id} />
      ))}
    </ul>
  )
}
