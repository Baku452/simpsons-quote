import { PropsSearch } from '../../interfaces/quoteInterface';
import styles from './index.module.scss';

export const Search: React.FC<PropsSearch> = ({characterName, setCharacterName}) => {
    return(
        <input aria-label='search-input' className={styles.search} type="text" value={characterName} onChange={(e) => setCharacterName(e.target.value)} placeholder="Enter a name" ></input>
    )
}