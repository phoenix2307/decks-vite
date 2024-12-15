import s from './DecksList.module.css'
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../app/store";
import {DeckItem} from "./DeckItem/DeckItem";
import {setDecksTC} from "../decks-thunks";
import {selectDecks} from "../decks-selectors";

export const DecksList = () => {
    //
    const decks = useAppSelector(selectDecks)
    const dispatch = useAppDispatch()
    //
    useEffect(() => {
        dispatch(setDecksTC())
    }, [])
    //
    return (
        <ul className={s.list}>
            {decks.map(deck => {
                return <DeckItem key={deck.id} deck={deck}/>
            })}
        </ul>
    )
}
