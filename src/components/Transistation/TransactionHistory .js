

const TransactionHistory  = ({transaction}) => {
    return(
        <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {transaction.map(trans =>(
      
         <tr key= {trans.id}>
         <td>{trans.type}</td>
         <td>{trans.amount}</td>
         <td>{trans.currency}</td>
       </tr>
    ))}
    </tbody>
</table>
    )
} 

export default TransactionHistory 