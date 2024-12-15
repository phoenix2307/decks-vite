import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://api.flashcards.andrii.es',
    headers: {
        'x-auth-skip': true,
    },
})

export const decksAPI = {
    getDecks() {
        return instance.get<DecksGetResponseType>('/v2/decks')
    }
}

export type DecksGetResponseType = {
    items: Item[],
    pagination: {
        currentPage: number
        itemsPerPage: number
        totalPages: number
        totalItems: number
    }
}

export type Item = {
    author: {
        id: string, name: string
    }
    cardsCount: number
    cover: null
    created: string
    id: string
    isFavorite: boolean
    isPrivate: boolean
    name: string
    updated: string
    userId: string
}

