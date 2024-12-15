import {Item} from "./decks-a-p-i";

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
        default:
            return state
    }
}

type DecksActions = SetDecksType

type SetDecksType = ReturnType<typeof setDecksAC>
export const setDecksAC = (items: Item[]) => {
    return {type: 'SET-DECKS', items} as const
}
