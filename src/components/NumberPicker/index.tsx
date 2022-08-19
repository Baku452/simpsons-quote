import styles from './index.module.scss'
import { PropsCount } from '../../interfaces/quoteInterface'

function NumberPicker ({count, setCount}: PropsCount)  {

    return (
        <div className={styles.picker}>
            <h3>Number of quotes</h3>
            <input type="number" min={1}  value={count} onChange={e => setCount(Number(e.target.value))} className={styles.picker__count} />
            {/* <button disabled={count > 0 ? false : true} onClick={()=>setCount(count-1)}>-</button>
            <button onClick={()=>setCount(count+1)}>+</button> */}
        </div>
    )
}

export default NumberPicker;