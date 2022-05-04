import "./Card.css"

export default function Card({ name = "", description = "", category }) {
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
