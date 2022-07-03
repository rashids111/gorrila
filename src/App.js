import React, { useState } from "react";
import './App.css';
// import { receipt1, receipt2, receipt3 } from './components/Records'
import receiptsArr from './components/Records'
import Receipts from './components/Receipts'

function App() {
  //const [receipts, setReceipts] = useState([receipt1])
  //const [receipts, setReceipts] = useState([receipt1, receipt2, receipt3])
  const [receipts, setReceipts] = useState(receiptsArr)
  const receiptItems = receipts.map((receipt) =>
    <Receipts key={receipt.person} value={receipt} />
  );
  return (
    <div className="App">
      <h1>Korilla</h1>
      {/* <div className="flex-container">
        <Receipts value={receipts[0]} />
        <Receipts value={receipts[1]} />
        <Receipts value={receipts[2]} />
      </div> */}
      <div className="flex-container">
        {receiptItems}
      </div>
    </div>
  );
}

export default App;
