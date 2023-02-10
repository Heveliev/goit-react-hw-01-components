import { getRandomHexColor } from './Statistic';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({label,percentage}) =>{
    return(
        <li style={{backgroundColor: `${getRandomHexColor()}`}} className={css.item}>
        <span  className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
      </li>
    )
}

Statistics.propTypes = {
label: PropTypes.string.isRequired,
percentage: PropTypes.number.isRequired,
  }

