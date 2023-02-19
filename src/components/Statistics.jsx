import PropTypes from 'prop-types';
import {} from './Statistics.styles';

function Statistics({ label, value }) {
  return (
    <div>
      <h1>UPLOAD STATS</h1>
      <ul>
        <li>
          <p>{label}</p>
          <p>{value}</p>
        </li>
        <li>
          <p>{label}</p>
          <p>{value}</p>
        </li>
        <li>
          <p>{label}</p>
          <p>{value}</p>
        </li>
        <li>
          <p>{label}</p>
          <p>{value}</p>
        </li>
        <li>
          <p>{label}</p>
          <p>{value}</p>
        </li>
      </ul>
    </div>
  );
}

export default Statistics;
