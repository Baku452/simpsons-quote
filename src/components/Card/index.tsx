import React from 'react'
import { CardDetailed } from '../../interfaces/quoteInterface';
import styles from './index.module.scss'

export function CardQuote ({quote, character, image}: CardDetailed)  {
    return (
        <div className={styles.card}>
            <blockquote>{quote}</blockquote>
            <div className={styles.card__content}>
                <img className={styles.card__image} alt={character} src={image}></img>
                <h3>{character}</h3>
            </div>
        </div>
    )
}
