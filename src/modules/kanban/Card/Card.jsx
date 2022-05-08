import { Box, Heading, Text, Button } from "@chakra-ui/react"

export default function Card({ id, name = "", description = "", deleteTask }) {
  // queremos que o elemento (qual stack) que disparar o evento de drop saiba qual card está sendo passado
  // para poder prosseguir com a lógica. Utilizamos do método dataTransfer para isso, passando o id do card
  // em questão. O handling do resto da lógica acontece no ColumnStack
  function onDragStart(e) {
    e.dataTransfer.setData("text/plain", id)

    // utilizamos o setTimeout para evitar que a indicação visual de que estamos arrastando a task suma
    setTimeout(() => {
      e.target.classList.add("hide")
    }, 0)
  }

  function onDragEnd(e) {
    e.target.classList.remove("hide")
  }

  return (
    <>
      <Box
        className="card"
        draggable="true"
        onDragStart={(e) => onDragStart(e)}
        onDragEnd={(e) => onDragEnd(e)}
        p={8}
        borderRadius="md"
        color="gray.50"
        bg="#44001A"
        boxShadow="lg"
      >
        <Heading as="h3" size="lg" mb={4}>
          {name}
        </Heading>
        <Text fontSize="xl">{description}</Text>
        <Button onClick={() => deleteTask(id)} colorScheme="red" mt={8}>
          Deletar
        </Button>
      </Box>
    </>
  )
}
