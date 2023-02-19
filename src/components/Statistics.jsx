import PropTypes from 'prop-types';
import { StatisticBox, UlStats, ListStats } from './Statistics.styles';

function Statistics({ title, stats }) {
  return (
    <StatisticBox>
      {title && <h1 style={{ fontSize: '22px' }}>{title}</h1>}
      <UlStats>
        {stats.map(({ label, percentage, id }) => (
          <ListStats key={id} style={{ background: '#f0f8ff' }}>
            <p>{label}</p>
            <p style={{ fontSize: '24px', fontWeight: '900' }}>{percentage}</p>
          </ListStats>
        ))}
      </UlStats>
    </StatisticBox>
  );
}

Statistics.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
};

export default Statistics;
