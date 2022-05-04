import { useState } from "react"

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
        return taskId !== task.id ? task : false
      })
    )
  }

  window.localStorage.setItem("tasks", JSON.stringify(tasks))

  return (
    <>
      <TaskCreator createNewTask={createNewTask}></TaskCreator>
      <div className="kanban">
        <ColumnStack
          title={"Todo"}
          tasks={tasks.filter((task) => task.category === "Todo")}
          deleteTask={deleteTask}
        ></ColumnStack>
        <ColumnStack
          title={"Running"}
          tasks={tasks.filter((task) => task.category === "Running")}
          deleteTask={deleteTask}
        ></ColumnStack>
        <ColumnStack
          title={"In Revision"}
          tasks={tasks.filter((task) => task.category === "Revision")}
          deleteTask={deleteTask}
        ></ColumnStack>
        <ColumnStack
          title={"Concluded"}
          tasks={tasks.filter((task) => task.category === "Concluded")}
          deleteTask={deleteTask}
        ></ColumnStack>
      </div>
    </>
  )
}
