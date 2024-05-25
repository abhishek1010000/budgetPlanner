import { useState } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState('Add Data To List...')
  const [remain, setRemain] = useState(2000)
  const [item, setItem] = useState(0)
  const [expenseCost, setExpenseCost] = useState(0)

  const addItem = () => {
    const cost = parseFloat(expenseCost)
    if (!isNaN(cost) && cost > 0) {
      setItem(prevItem => prevItem + cost)
      setRemain(prevRemain => prevRemain - cost)
    }
    
  }

  const numberChange = (e)=>{
     setExpenseCost(e.target.value)
  }
  const changeText = (e)=>{
    setList(e.target.value)
  }
  return (
    <>
      <div className="main">
        <h1>My Budget Planner</h1>
        <div className="info">
          <h2 className='h21'>Budget: Rs.2000</h2>
          <h2 className='h22'>Remaining: Rs.{remain}</h2>
          <h2 className='h23'>Spent so far: Rs.{item}</h2>
        </div>
        <h2>Expenses</h2>
        <h1 className='add'>{list} <span> {expenseCost} </span> </h1>
        <h1>Add Expenses</h1>
        <div className="input">
          <label htmlFor="Name">Name</label><br />
          <input 
            type="text" 
            className='text' 
            // value={expenseName} 
            onChange={changeText} 
          /><br />
          <label htmlFor="Cost">Cost</label><br />
          <input 
            type="number" 
            className='number' 
            value={expenseCost} 
            onChange={numberChange} 
          /><br />
          <button onClick={addItem}>Save</button>
        </div>
      </div>
    </>
  )
}

export default App
