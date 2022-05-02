import "./Card.css"

export default function Card({
  name = "",
  description = "Fallback pro caso da descrição não existir",
  category,
}) {
  return (
    <>
      <div className="card">
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="status">{category}</p>
      </div>
    </>
  )
}
