import { useState } from "react"

import ColumnStack from "../ColumnStack/ColumnStack"
import TaskCreator from "../TaskCreator/TaskCreator"
import "./KanbanApp.css"

const TASKS = [
  {
    id: 1,
    name: "Task1",
    description: "Lorem ipsum",
    category: "Todo",
  },
  {
    id: 2,
    name: "Task2",
    description: "Tarefa 2 de testes",
    category: "Running",
  },
  {
    id: 3,
    name: "Task3",
    description: "Mais uma task",
    category: "Revision",
  },
  {
    id: 4,
    name: "Task4",
    category: "Concluded",
  },
  {
    id: 5,
    name: "Task5",
    category: "Concluded",
  },
]

export default function KanbanApp() {
  // criando
  const [tasks, setTasks] = useState(TASKS)

  // adicionando uma nova tarefa à lista de tarefas
  function createNewTask(name = "", desc = "") {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        name: name,
        description: desc,
        category: "Todo",
      },
    ])
  }

  return (
    <>
      <TaskCreator createNewTask={createNewTask}></TaskCreator>
      <div className="kanban">
        <ColumnStack
          tasks={tasks.filter((task) => task.category === "Todo")}
        ></ColumnStack>
        <ColumnStack
          tasks={tasks.filter((task) => task.category === "Running")}
        ></ColumnStack>
        <ColumnStack
          tasks={tasks.filter((task) => task.category === "Revision")}
        ></ColumnStack>
        <ColumnStack
          tasks={tasks.filter((task) => task.category === "Concluded")}
        ></ColumnStack>
      </div>
    </>
  )
}
