import PropTypes from 'prop-types'; 
import css from './Notification.module.css'

export const Notification = ({message}) => {
    return (
        <div className={css.message_wrapper}>
        <p className={css.message_text}>{message}</p>
        </div>
    )
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}