import PropTypes from 'prop-types';
import { BoxTable, MainTitle, Tr, Td } from './TransactionHistory.styles';

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
          <Tr key={el.id}>
            <Td>{el.type}</Td>
            <Td>{el.amount}</Td>
            <Td>{el.currency}</Td>
          </Tr>
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
  ).isRequired,
};

export default TransactionHistory;
