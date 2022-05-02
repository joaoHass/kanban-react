import Card from "../Card/Card"
import "./ColumnStack.css"

export default function ColumnStack({ tasks }) {
  return (
    <>
      {tasks.map((task) => (
        <Card name={task.name}></Card>
      ))}
    </>
  )
}
