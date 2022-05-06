import Card from "../Card/Card"
import "./ColumnStack.css"

export default function ColumnStack({
  title,
  id,
  tasks,
  deleteTask,
  changeTaskStatus,
}) {
  function dragEnter(e) {
    // deixando a stack um objeto válido para drops
    e.preventDefault()
    e.target.classList.add("drag-over")
  }

  function dragOver(e) {
    e.preventDefault()
    e.target.classList.add("drag-over")
  }

  function dragLeave(e) {
    e.target.classList.remove("drag-over")
  }

  function drop(e) {
    e.target.classList.remove("drag-over")
  }

  return (
    <>
      <div className="wrapper">
        <h2>
          {title} ({tasks.length})
        </h2>
        <div
          className="stack"
          id={id}
          onDragEnter={(e) => dragEnter(e)}
          onDragOver={(e) => dragOver(e)}
          onDragLeave={(e) => dragLeave(e)}
          onDrop={(e) => drop(e)}
        >
          {tasks.map((task) => (
            <Card
              key={task.id}
              id={task.id}
              name={task.name}
              description={task.description}
              category={task.category}
              deleteTask={deleteTask}
              changeTaskStatus={changeTaskStatus}
            ></Card>
          ))}
        </div>
      </div>
    </>
  )
}
