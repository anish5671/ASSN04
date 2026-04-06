import { useState } from 'react'
import './GoalForm.css'

function GoalForm({ onAddGoal }) {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleAddClick = () => {
    if (inputValue.trim() !== '') {
      onAddGoal(inputValue)
      setInputValue('')
    } else {
      alert('Please enter a goal!')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddClick()
    }
  }

  return (
    <div className="goal-form">
      <input
        type="text"
        placeholder="Enter your new goal..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="goal-input"
      />
      <button onClick={handleAddClick} className="add-button">Add</button>
    </div>
  )
}

export default GoalForm
