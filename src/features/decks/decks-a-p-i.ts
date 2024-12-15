import axios from 'axios'
import {FormValues} from "./AddNewDeckForm/AddNewDeckForm";

export const instance = axios.create({
    baseURL: 'https://api.flashcards.andrii.es',
    headers: {
        'x-auth-skip': true,
    },
})

export const decksAPI = {
    getDecks() {
        return instance.get<DecksGetResponseType>('/v2/decks')
    },
    post(data: FormValues) {
        return instance.post<DeckPostResponseType>('/v1/decks', data)
    }
}

export type AuthorType = {
    id: string, name: string
}
export type DeckPostResponseType = {
    id: string
    userId: string
    name: string
    isPrivate: boolean
    cover: string
    created: string
    updated: string
    cardsCount: number
}
export type Item = AuthorType & DeckPostResponseType
export type DecksGetResponseType = {
    items: Item[],
    pagination: {
        currentPage: number
        itemsPerPage: number
        totalPages: number
        totalItems: number
    }
}





