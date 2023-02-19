import PropTypes from 'prop-types';
import { BoxTable, MainTitle } from './TransactionHistory.styles';

function TransactionHistory({ items }) {
  return (
    <BoxTable>
      <thead>
        <tr>
          <MainTitle>Type</MainTitle>
          <MainTitle>Amount</MainTitle>
          <MainTitle>Currency</MainTitle>
        </tr>
      </thead>
      <tbody>
        {items.map(el => (
          <tr key={el.id} style={{ textAlign: 'center', fontSize: '18px' }}>
            <td style={{ padding: '10px' }}>{el.type}</td>
            <td style={{ padding: '10px' }}>{el.amount}</td>
            <td style={{ padding: '10px' }}>{el.currency}</td>
          </tr>
        ))}
      </tbody>
    </BoxTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
