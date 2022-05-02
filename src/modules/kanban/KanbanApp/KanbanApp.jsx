import ColumnStack from "../ColumnStack/ColumnStack"
import "./KanbanApp.css"

const TASKS = [
  {
    id: "1",
    name: "Task1",
    description: "Lorem ipsum",
    category: "Todo",
  },
  {
    id: "2",
    name: "Task2",
    description: "Tarefa 2 de testes",
    category: "Running",
  },
  {
    id: "3",
    name: "Task3",
    description: "Mais uma task",
    category: "Revision",
  },
  {
    id: "4",
    name: "Task4",
    category: "Concluded",
  },
  {
    id: "5",
    name: "Task4",
    category: "Concluded",
  },
]

export default function KanbanApp() {
  return (
    <>
      <div className="kanban">
        <ColumnStack
          tasks={TASKS.filter((task) => task.category === "Todo")}
        ></ColumnStack>
        <ColumnStack
          tasks={TASKS.filter((task) => task.category === "Running")}
        ></ColumnStack>
        <ColumnStack
          tasks={TASKS.filter((task) => task.category === "Revision")}
        ></ColumnStack>
        <ColumnStack
          tasks={TASKS.filter((task) => task.category === "Concluded")}
        ></ColumnStack>
      </div>
    </>
  )
}
