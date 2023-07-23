import PropTypes from 'prop-types';
import styles from './Statistics.module.css'

export default function Statistics ({
title, 
statData, 
}) {
    return(
        <section className={styles.statistics}>
      {title && <h2 className={title}>{title}</h2>}

        <ul className={styles.statList}>
        {statData.map(({id, label, percentage}) =>(
        <li key={id} className={styles.item}>
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage}</span>
        </li>
        ))}
      </ul>
    </section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ).isRequired,
  };