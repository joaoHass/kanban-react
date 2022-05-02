import "./Card.css"

export default function Card({ name = "", description = "" }) {
  return (
    <>
      <div className="card">
        <h3>{name}</h3>
        <p>The cards on the table gin rummy</p>
      </div>
    </>
  )
}
