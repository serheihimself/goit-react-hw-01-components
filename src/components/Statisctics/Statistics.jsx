import PropTypes from 'prop-types';
import {
  StatisticBox,
  UlStats,
  ListStats,
  ListDescription,
} from './Statistics.styles';

function Statistics({ title, stats }) {
  return (
    <StatisticBox>
      {title && <h1 style={{ fontSize: '22px' }}>{title}</h1>}
      <UlStats>
        {stats.map(({ label, percentage, id }) => (
          <ListStats key={id}>
            <p>{label}</p>
            <ListDescription>{percentage}</ListDescription>
          </ListStats>
        ))}
      </UlStats>
    </StatisticBox>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Statistics;

// FriendList.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.exact({
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//       id: PropTypes.number.isRequired,
//     })
//   ),
// };
