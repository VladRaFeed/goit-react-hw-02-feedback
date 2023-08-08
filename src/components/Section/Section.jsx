import PropTypes from 'prop-types';
import css from './Section.module.css'

export const Section = ({ title, children }) => {
    return (
        <section className={css.section}>
            <div className={css.title_wrapper}>
                <h2 className={css.section_title}>{title}</h2>
                {children}
            </div>
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}