import {DeckPostResponseType, Item} from "./decks-a-p-i";

const initialState = {
    decks: [] as Item[], // todo: add type
    searchParams: {
        name: '',
    },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
    switch (action.type) {
        case "SET-DECKS": {
            return {
                ...state,
              decks: action.items
            }
        }
        case "ADD-DECK": {
            return {...state, decks: [action.deck, ...state.decks]}
        }
        default:
            return state
    }
}

type DecksActions = SetDecksType | AddDeckType

type SetDecksType = ReturnType<typeof setDecksAC>
type AddDeckType = ReturnType<typeof addDeckAC>

export const setDecksAC = (items: Item[]) => {
    return {type: 'SET-DECKS', items} as const
}
export const addDeckAC = (deck: DeckPostResponseType) => {
    return {type: 'ADD-DECK', deck} as const
}