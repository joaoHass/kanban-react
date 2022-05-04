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
  const [tasks, setTasks] = useState(TASKS)

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

  function deleteTask(taskId) {
    setTasks(
      tasks.filter((task) => {
        if (taskId !== task.id) {
          return task
        }
      })
    )
  }

  return (
    <>
      <TaskCreator createNewTask={createNewTask}></TaskCreator>
      <div className="kanban">
        <ColumnStack
          tasks={tasks.filter((task) => task.category === "Todo")}
          deleteTask={deleteTask}
        ></ColumnStack>
        <ColumnStack
          tasks={tasks.filter((task) => task.category === "Running")}
          deleteTask={deleteTask}
        ></ColumnStack>
        <ColumnStack
          tasks={tasks.filter((task) => task.category === "Revision")}
          deleteTask={deleteTask}
        ></ColumnStack>
        <ColumnStack
          tasks={tasks.filter((task) => task.category === "Concluded")}
          deleteTask={deleteTask}
        ></ColumnStack>
      </div>
    </>
  )
}
