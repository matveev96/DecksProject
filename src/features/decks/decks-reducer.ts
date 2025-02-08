import type { Items } from '../../common/types/types.ts'

const initialState = {
  decks: [] as Items[],
  searchParams: {
    name: '',
  },
}

export type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET_DECK': {
      return {...state, decks: action.payload }
    }

    case 'ADD_DECK': {
      const newItem = {
        ...action.payload,
      }
      return { ...state, decks: [newItem, ...state.decks] }
    }

    default:
      return state
  }
}

export const setDeckAC = (payload: Items[]) => {
  return {
    type: 'SET_DECK',
    payload
  } as const
}

export const addDeckAC = (payload: Items) => {
  return {
    type: 'ADD_DECK',
    payload
  } as const
}

type setDeckAT = ReturnType<typeof setDeckAC>
type addDeckAT = ReturnType<typeof addDeckAC>

type DecksActions = setDeckAT | addDeckAT
