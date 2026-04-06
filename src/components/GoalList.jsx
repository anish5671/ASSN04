import GoalItem from './GoalItem'
import './GoalList.css'

function GoalList({ title, goals, onMarkDone, onDelete }) {
  return (
    <div className="goal-list">
      <h2>{title}</h2>
      {goals.length === 0 ? (
        <p className="no-goals">No {title.toLowerCase()} yet.</p>
      ) : (
        <ul className="goals-ul">
          {goals.map(goal => (
            <GoalItem
              key={goal.id}
              goal={goal}
              onMarkDone={onMarkDone}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default GoalList
