import Card from "../Card/Card"
import "./ColumnStack.css"

import { Heading } from "@chakra-ui/react"

export default function ColumnStack({
  title,
  id,
  tasks,
  deleteTask,
  changeTaskStatus,
}) {
  function dragEnter(e) {
    // utilizamos o e.preventDefault() para deixar a stack um objeto válido para ser usado como drop target
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

    // pegando a id do card passada na função onDragStart(e) do Card
    let cardId = e.dataTransfer.getData("text/plain")

    //utilizamos o currentTarget para sempre pegar a stack que está com o handler, e não o evento mais profundo que disparou
    // isso evita que quando o user arraste o card em cima de outro, haja erros. Já que ele não vai passar algum elemento do card como target, mas sim sempre a stack (que tem o handler)
    changeTaskStatus(cardId, e.currentTarget.attributes["id"].value)
  }

  return (
    <>
      <div className="wrapper">
        <Heading color="#fff" mb={8} size="lg">
          {title} ({tasks.length})
        </Heading>
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
