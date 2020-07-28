import React from 'react'

export const IncomeExpenses = () => {
  return (
    <div className="inc-exp-container">
      <div> 
        <h2>Income</h2>
        <p id="money-plus" className="money plus">+$0.00</p>
      </div>
      <div>
        <h2>Expenses</h2>
        <p id="money-minus" className="money minus">-$0.00</p>
      </div>
    </div>
  )
}
