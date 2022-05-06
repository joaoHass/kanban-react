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

  function changeTaskStatus(taskId, category) {
    // pegando o index da task que precisamos alterar o estado
    let categoryy = "Todo"
    if (category === 2) categoryy = "Running"
    if (category === 2) categoryy = "Revision"
    if (category === 2) categoryy = "Concluded"
    console.log(categoryy)
    const taskToChangeId = tasks.findIndex((x) => x.id === taskId)
    // alterando ele
    tasks[taskToChangeId] = {
      ...tasks[taskToChangeId],
      category: categoryy,
    }

    console.log(Array.isArray(tasks), tasks)
  }

  window.localStorage.setItem("tasks", JSON.stringify(tasks))
  console.log(
    tasks,
    Array.isArray(tasks),
    Array.isArray(JSON.parse(window.localStorage.getItem("tasks")))
  )

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
        {/*         {STACKS.forEach((column) => {
          ;<ColumnStack
            title={column.name}
            tasks={tasks.filter((task) => task.category === column.name)}
            deleteTask={deleteTask}
            changeTaskStatus={changeTaskStatus}
          ></ColumnStack>
        })} */}
        <ColumnStack
          title={"Todo"}
          id="1"
          tasks={
            Array.isArray(tasks)
              ? tasks.filter((task) => task.category === "Todo")
              : console.log("n")
          }
          deleteTask={deleteTask}
          changeTaskStatus={changeTaskStatus}
        ></ColumnStack>
        <ColumnStack
          title={"Running"}
          id="2"
          tasks={tasks.filter((task) => task.category === "Running")}
          deleteTask={deleteTask}
          changeTaskStatus={changeTaskStatus}
        ></ColumnStack>
        <ColumnStack
          title={"In Revision"}
          id="3"
          tasks={tasks.filter((task) => task.category === "Revision")}
          deleteTask={deleteTask}
          changeTaskStatus={changeTaskStatus}
        ></ColumnStack>
        <ColumnStack
          title={"Concluded"}
          id="4"
          tasks={tasks.filter((task) => task.category === "Concluded")}
          deleteTask={deleteTask}
          changeTaskStatus={changeTaskStatus}
        ></ColumnStack>
      </div>
    </>
  )
}
