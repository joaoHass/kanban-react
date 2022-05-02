import Card from "../Card/Card"
import "./ColumnStack.css"

export default function ColumnStack({ tasks }) {
  return (
    <>
      <div className="stack">
        {tasks.map((task) => (
          <Card
            name={task.name}
            description={task.description}
            category={task.category}
          ></Card>
        ))}
      </div>
    </>
  )
}
