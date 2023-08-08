import PropTypes from 'prop-types'; 
import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedBack }) => {
    return (
        <div className={css.btns_wrapper}>
            <h1 className={css.fb_title}>Please leave feedback</h1>
            <ul className={css.btns_list}>
                {options.map(type => (
                    <li>
                        <button type="button" key={type} onClick={() => onLeaveFeedBack(type)} className={css.fb_button}>{type}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired,).isRequired,
    onLeaveFeedBack: PropTypes.func.isRequired,
}