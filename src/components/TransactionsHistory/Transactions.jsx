import PropTypes from 'prop-types';
import styles from './Transactions.module.css';

export default function TransactionHistory({ title, itemsTable }) {
  return (
    <section className={styles.transaction}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <table className={styles.transactionHistory}>
        <thead>
          <tr>
            <th className={styles.tableHead}>Type</th>
            <th className={styles.tableHead}>Amount</th>
            <th className={styles.tableHead}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {itemsTable.map(({ id, type, amount, currency }) => (
            <tr key={id} className={styles.tableRow}>
              <td className={styles.tableCell}>{type}</td>
              <td className={styles.tableCell}>{amount}</td>
              <td className={styles.tableCell}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

TransactionHistory.propTypes = {
  title: PropTypes.string,
  itemsTable: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
