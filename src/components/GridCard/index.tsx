import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import {getQuotes} from '../../utils/getQuotes'
import { CardQuote } from '../Card'
import { Search } from '../Search'
import NumberPicker from '../NumberPicker'
import styles from './index.module.scss'
import { CardDetailed } from '../../interfaces/quoteInterface'

export const GridCard = () => {

    const [characterName, setCharacterName] = useState<string>("");
    const [count, setCount] = useState<number>(1);

    function callbackSetCharacterName(characterName: string):void {
        setCharacterName(characterName);
    }

    function callbackGetChildState(value:number):void {
        setCount(value)
    }

    const { isLoading, data, refetch} = useQuery<CardDetailed[]>(['data', characterName,count], () => getQuotes(characterName,count), {
        staleTime: Infinity
    })
    
    function handleClickRefetch () {
        refetch();
    }
    return (
        <div className={styles.container}>
            <button onClick={handleClickRefetch}>Get Another Quote</button>
            <div className={styles.container__filter}>
                <Search characterName={characterName} setCharacterName={callbackSetCharacterName}/>
                <NumberPicker count={count} setCount={callbackGetChildState}/>
            </div>
            {
                isLoading ? 
                <h1>Is Loading</h1> :
                <div className={styles.grid}>
                    {
                        data?.map((item, index) => 
                        (
                            <CardQuote key={item.character + index} {...item} />
                        ))
                    }
                </div>
            }
        </div>
    )
}