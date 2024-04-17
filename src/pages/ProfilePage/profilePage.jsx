import React from 'react'
import Transaction from '../../components/Transaction/transaction';
import EditName from '../../components/EditName/editName';
import TransactionData from '../../data/transactionData.json';
import './profilePage.css'

function profilePage() {
  return (
    <main className="main bg-dark">
      <div>
        <EditName/>
        {TransactionData.map((data) => (
            /* Return item component */
            < Transaction 
              key={data.id}
              title={data.title}
              amount={data.amount}
              description={data.description}
            />
        ))}
      </div>
    </main>
  )
}

export default profilePage