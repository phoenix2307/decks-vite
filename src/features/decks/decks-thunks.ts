import {DeckPostResponseType, decksAPI, Item} from "./decks-a-p-i";
import {AppDispatch} from "../../app/store";
import {addDeckAC, setDecksAC} from "./decks-reducer";
import {FormValues} from "./AddNewDeckForm/AddNewDeckForm";

export const setDecksTC = () => (dispatch: AppDispatch) => {
    decksAPI.getDecks().then(res => {
        dispatch(setDecksAC(res.data.items))
    })
}

export const addDeckTC = (data: FormValues) => (dispatch: AppDispatch) => {
    return decksAPI.post(data).then(res => {
        dispatch(addDeckAC(res.data))
    })
}

