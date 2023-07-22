import PropTypes from 'prop-types';

export default function TransactionHistory ({
    title, 
    itemsTable, 
    }) {
        return(
            <section className="transaction">
          {title && <h2 className="title">{title}</h2>}
    
            <table className="transaction-history">
                <thead>
                <tr >
                  <th className='tableHead'>Type</th>
                  <th className='tableHead'>Amount</th>
                  <th className='tableHead'>Currency</th>
                </tr>
              </thead>
            {itemsTable.map(({
                id, 
                type, 
                amount, 
                currency,
            }) =>(
    <tbody>
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    </tbody>
            ))}
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