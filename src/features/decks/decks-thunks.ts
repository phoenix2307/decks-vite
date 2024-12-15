import {DeckPostResponseType, Item} from "./decks-a-p-i";
import {AppDispatch} from "../../app/store";
import {addDeckAC, setDecksAC} from "./decks-reducer";

export const setDecksTC = (items: Item[]) => (dispatch: AppDispatch) => {
    dispatch(setDecksAC(items))
}

export const addDeckTC = (deck: DeckPostResponseType) => (dispatch: AppDispatch) => {
    dispatch(addDeckAC(deck))
}