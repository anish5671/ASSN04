import './GoalItem.css'

function GoalItem({ goal, onMarkDone, onDelete }) {
  return (
    <li className={`goal-item ${goal.isDone ? 'done' : ''}`}>
      <div className="goal-text">
        <span className={goal.isDone ? 'completed' : ''}>{goal.text}</span>
      </div>
      <div className="goal-buttons">
        <button
          className="mark-done-button"
          onClick={() => onMarkDone(goal.id)}
        >
          {goal.isDone ? 'Undo' : 'Mark as Done'}
        </button>
        <button
          className="delete-button"
          onClick={() => onDelete(goal.id)}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default GoalItem
