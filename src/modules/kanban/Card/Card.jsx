import "./Card.css"

export default function Card({
  id,
  name = "",
  description = "",
  category,
  deleteTask,
}) {
  return (
    <>
      <div className="card">
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="status">{category}</p>
        <button onClick={() => deleteTask(id)}>Deletar</button>
      </div>
    </>
  )
}
