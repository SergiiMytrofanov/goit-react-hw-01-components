import PropTypes from 'prop-types';

export default function Statistics ({
id,
title, 
statData, 
}) {
    return(
        <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        <li key={id} className="item">
          <span className="label">{title}</span>
          <span className="percentage">{statData}</span>
        </li>
      </ul>
    </section>
    );
}

Statistics.propTypes = {
  id:PropTypes.string,
  title: PropTypes.string,
  statData: PropTypes.number,
};