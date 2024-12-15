import {Item} from "./decks-a-p-i";
import {AppDispatch} from "../../app/store";
import {setDecksAC} from "./decks-reducer";

export const setDecksTC = (items: Item[]) => (dispatch: AppDispatch) => {
    dispatch(setDecksAC(items))
}