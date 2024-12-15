import s from './DecksList.module.css'
import {decksAPI, Item} from "../decks-a-p-i";
import {setDecksAC} from "../decks-reducer";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {AppRootState, useAppDispatch} from "../../../app/store";
import {DeckItem} from "./DeckItem/DeckItem";

export const DecksList = () => {
  //
  const decks = useSelector<AppRootState, Item[]>(state => state.decksReducer.decks)
  const dispatch = useAppDispatch()
  //
  useEffect(()=>{
    decksAPI.getDecks().then(res => {
      dispatch(setDecksAC(res.data.items))
    })
  }, [])
  //
  return (
      <ul className={s.list}>
        {decks.map(deck=> {
          return <li key={deck.id}>{<DeckItem deck={deck}/>}</li>
        })}
      </ul>
  )
}
