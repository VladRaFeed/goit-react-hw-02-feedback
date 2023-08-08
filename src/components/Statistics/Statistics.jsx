import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
    return (
        <div className={css.stats_wrapper}>
        <h2 className={css.stats_title}>Statistics</h2>
        <ul className={css.stats_list}>
            <li className={css.stats_item}>
                <p>Good: {good}</p>
            </li>
            <li className={css.stats_item}>
                <p>Neutral: {neutral}</p>
            </li>
            <li className={css.stats_item}>
                <p>Bad: {bad}</p>
            </li>
            <li className={css.stats_item}>
                <p>Total: {total}</p>
            </li>
            <li className={css.stats_item}>
                <p>Percentage: {percentage}%</p>
            </li>
            </ul>
        </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
}