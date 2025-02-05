import axios from 'axios'
import type { BaseResponse } from '../../common/types/types.ts'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi = {
  fetchDecks() {
    return instance.get<BaseResponse>('/v2/decks')
  }
}
