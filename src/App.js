import { useState } from "react"
import "./App.css"
import Card from "@modules/kanban/Card"

function ColumnStack() {}

function KanbanApp() {}

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      Foi clicado {count} {count === 1 ? "vez" : "vezes"}
    </button>
  )
}
