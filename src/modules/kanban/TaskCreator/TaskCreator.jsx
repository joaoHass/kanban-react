import { useState } from "react"

import { Box, Input, Text, Textarea, Button } from "@chakra-ui/react"

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
      <Box
        as="form"
        className="createTask"
        onSubmit={(e) => handleCardCreation(e)}
        p={8}
        maxWidth="lg"
        m="auto"
      >
        <Text
          as="label"
          htmlFor="name"
          display="inline-block"
          fontSize="xl"
          fontWeight="600"
          color="#fff"
          mb={1}
        >
          Task Name
        </Text>
        <Input
          onChange={(e) => handleNameChange(e)}
          value={name || ""}
          type="text"
          name="name"
          required
          placeholder="Task name here"
          fontWeight="600"
          color="#fff"
          focusBorderColor="green.200"
          mb={4}
        />
        <Text
          as="label"
          htmlFor="desc"
          display="inline-block"
          fontSize="xl"
          fontWeight="600"
          color="#fff"
          mb={1}
        >
          Task Description{" "}
        </Text>
        <Textarea
          onChange={(e) => handleDescChange(e)}
          value={description || ""}
          type="text"
          name="desc"
          required
          placeholder="Description"
          fontWeight="600"
          color="#fff"
          focusBorderColor="green.200"
        />

        <Button type="submit" colorScheme="green" m="auto" mt={4}>
          Create Task
        </Button>
      </Box>
    </>
  )
}
