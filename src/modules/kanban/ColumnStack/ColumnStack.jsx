import Card from "../Card/Card"
import "./ColumnStack.css"

export default function ColumnStack({ tasks, deleteTask }) {
  return (
    <>
      <div className="stack">
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
