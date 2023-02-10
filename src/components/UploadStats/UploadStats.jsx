import css from './UploadStats.module.css';
import { Statistics } from '../Statistics/Statistics';
import data from '../data/data.json';


export const UploadStats = () =>{
    return (<section className={css.statistics}>
    <h2 className={css.title}>Upload stats</h2>
    <ul className={css.stat_list}>
        {data.map(event=>(
        <Statistics 
        key={event.id}
        label={event.label}
        percentage={event.percentage}/>
        ))
        }
    </ul>
    </section>)
}

