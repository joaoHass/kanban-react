import Card from "../Card/Card"
import "./ColumnStack.css"

export default function ColumnStack({ title, tasks, deleteTask }) {
  return (
    <>
      <div className="stack">
        <h2>
          {title} ({tasks.length})
        </h2>
        {tasks.map((task) => (
          <Card
            key={task.id}
            id={task.id}
            name={task.name}
            description={task.description}
            category={task.category}
            deleteTask={deleteTask}
          ></Card>
        ))}
      </div>
    </>
  )
}
