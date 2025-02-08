import s from './DecksList.module.css'
import { useEffect } from 'react'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { selectDecks } from '../decks-selectors.ts'
import { fetchDecksTC } from '../decks-thunks.ts'

export const DecksList = () => {
  const decks = useAppSelector(selectDecks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchDecksTC())
  }, [])

  return (
    <ul className={s.list}>
      {decks.decks.map((deck) => (
        <DeckItem deck={deck} key={deck.id} />
      ))}
    </ul>
  )
}
