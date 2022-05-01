import {Stack} from "@mui/material";
import TodoList from "../components/todo/TodoList";
import CreateTodo from "../components/todo/CreateTodo";

export const HomePage = () => {

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="stretch"
      spacing={2}
      sx={{my: 2}}
    >
      <CreateTodo/>
      <TodoList/>
    </Stack>
  )
}

export default HomePage