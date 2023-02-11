import css from './TransactionHistory.module.css';
import { TransactionItem } from 'components/TransactionItem/TransactionItem';
import PropTypes from 'prop-types';

export const TransactionHistory = ({transactions}) =>{
    return (
        <table className={css.transaction_history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {transactions.map(transaction=>(<TransactionItem key={transaction.id}
  type={transaction.type}
  amount={transaction.amount}
  currency={transaction.currency}
  />))}
  
  </tbody>
</table>
    )
}

TransactionHistory.propTypes ={
    transactions: PropTypes.array.isRequired,
}