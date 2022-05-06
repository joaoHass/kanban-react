import "./Card.css"

export default function Card({
  id,
  name = "",
  description = "",
  category,
  deleteTask,
  changeTaskStatus,
}) {
  function onDragStart(e) {
    setTimeout(() => {
      e.target.classList.add("hide")
    }, 0)
  }

  function onDragEnd(e) {
    // verificando se o pai é uma stack válida
    if (e.target.parentNode.classList.contains("stack")) {
      // mudar isso
      // estou pegando o id do stack pai atual, preciso pegar do stack alvo
      // implementar isso no drop da ColumnStack
      changeTaskStatus(id, e.target.parentNode.attributes["id"])
    }
    e.target.classList.remove("hide")
  }

  return (
    <>
      <div
        className="card"
        draggable="true"
        onDragStart={(e) => onDragStart(e)}
        onDragEnd={(e) => onDragEnd(e)}
      >
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="status">{category}</p>
        <button onClick={() => deleteTask(id)}>Deletar</button>
      </div>
    </>
  )
}
