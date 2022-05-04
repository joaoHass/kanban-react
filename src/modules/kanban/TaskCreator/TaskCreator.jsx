import { useState } from "react"

import "./TaskCreator.css"

// Requisitos:
// precisa que quando o user clique no botão, execute a função createNewTask
// pegando os valors do name e desc
// preciso resetar os valores dos inputs para ''
// precisa retornar descrição e nome

export default function TaskCreator({ createNewTask }) {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleDescChange(e) {
    setDescription(e.target.value)
  }

  function handleCardCreation(e) {
    e.preventDefault()
    createNewTask(name, description)
    setName("")
    setDescription("")
  }

  return (
    <>
      <form className="createTask" onSubmit={(e) => handleCardCreation(e)}>
        <label htmlFor="name">Nome da task</label>
        <input
          onChange={(e) => handleNameChange(e)}
          value={name || ""}
          type="text"
          name="name"
          required
        />
        <label htmlFor="desc">Descrição da task </label>
        <input
          onChange={(e) => handleDescChange(e)}
          value={description || ""}
          type="text"
          name="desc"
          required
        />

        <button type="submit">+</button>
      </form>
    </>
  )
}
