import React from "react";

export const TransactionList = () => {
  return (
    <React.Fragment>
      <h2>History</h2>
      <ul class="list">
        <li className="minus">
          Cash <span>-$400</span>
          <button clasName="delete-btn">X</button>
        </li>
      </ul>
    </React.Fragment>
  );
};
