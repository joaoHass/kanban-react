import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

import ColumnStack from "../ColumnStack/ColumnStack"
import TaskCreator from "../TaskCreator/TaskCreator"
import "./KanbanApp.css"

const TASKS = JSON.parse(window.localStorage.getItem("tasks")) || []

export default function KanbanApp() {
  const [tasks, setTasks] = useState(TASKS)
  function createNewTask(name = "", desc = "") {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        name: name,
        description: desc,
        category: "Todo",
      },
    ])
  }

  function deleteTask(taskId) {
    setTasks(
      tasks.filter((task) => {
        return taskId !== task.id ? task : false
      })
    )
  }

  function changeTaskStatus(taskId, categoryId) {
    const categoryName = STACKS.find(
      (column) => column.id === parseInt(categoryId, 10)
    )["name"]
    const taskToChangeId = tasks.findIndex((x) => x.id === taskId)
    tasks[taskToChangeId] = {
      ...tasks[taskToChangeId],
      category: categoryName,
    }
    // forçando uma re-renderização pelo React
    setTasks([...tasks])
  }

  // atualizamos o localStorage toda vez que o componente é re-renderizado
  window.localStorage.setItem("tasks", JSON.stringify(tasks))

  const STACKS = [
    {
      name: "Todo",
      id: 1,
    },
    {
      name: "In Progress",
      id: 2,
    },
    {
      name: "In Revision",
      id: 3,
    },
    {
      name: "Concluded",
      id: 4,
    },
  ]

  return (
    <>
      <TaskCreator createNewTask={createNewTask}></TaskCreator>
      <div className="kanban">
        {STACKS.map((column) => {
          return (
            <ColumnStack
              key={column.id}
              title={column.name}
              id={column.id}
              tasks={tasks.filter((task) => task.category === column.name)}
              deleteTask={deleteTask}
              changeTaskStatus={changeTaskStatus}
            ></ColumnStack>
          )
        })}
      </div>
    </>
  )
}
