import { useState } from 'react'
import GoalForm from './components/GoalForm'
import GoalList from './components/GoalList'
import './App.css'

function App() {
  const [goals, setGoals] = useState([])

  const addGoal = (goalText) => {
    const newGoal = {
      id: Date.now(),
      text: goalText,
      isDone: false
    }
    setGoals([...goals, newGoal])
  }

  const markAsDone = (goalId) => {
    setGoals(goals.map(goal =>
      goal.id === goalId ? { ...goal, isDone: !goal.isDone } : goal
    ))
  }

  const deleteGoal = (goalId) => {
    setGoals(goals.filter(goal => goal.id !== goalId))
  }

  return (
    <div className="app-container">
      <h1>Goal Manager</h1>
      <GoalForm onAddGoal={addGoal} />
      <GoalList title="Pending Goals" goals={goals.filter(goal => !goal.isDone)} onMarkDone={markAsDone} onDelete={deleteGoal} />
      <GoalList title="Done Goals" goals={goals.filter(goal => goal.isDone)} onMarkDone={markAsDone} onDelete={deleteGoal} />
    </div>
  )
}

export default App
