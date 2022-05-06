import "./Card.css"

export default function Card({
  id,
  name = "",
  description = "",
  category,
  deleteTask,
}) {
  // queremos que o elemento (qual stack) que disparar o evento de drop saiba qual card está sendo passado
  // para poder prosseguir com a lógica. Utilizamos do método dataTransfer para isso, passando o id do card
  // em questão. O handling do resto da lógica acontece no ColumnStack
  function onDragStart(e) {
    e.dataTransfer.setData("text/plain", id)

    // utilizamos o setTimeout para evitar que a indicação visual de que estamos arrastando a task suma
    setTimeout(() => {
      e.target.classList.add("hide")
    }, 0)
  }

  function onDragEnd(e) {
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
