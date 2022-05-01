import {Button, Stack, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {firestore} from "../../services/firestore";

const CreateTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    if (!inputValue) setError(true)
    else setError(false)
  }, [inputValue]);

  const handleAddTodo = async () => {
    if (inputValue) {
      const doc = {todo: inputValue}
      firestore.collection("todos").add(doc)
        .catch(error => {
          console.log(error.message)
        })
      // await dispatch(addTodo(inputValue))
      setInputValue("")
    } else {
      setError(true)
    }
  }

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      spacing={2}>
      <item>
        <TextField
          id="outlined-basic"
          name="input"
          label="Create a To-do"
          placeholder="Type your to-do"
          fullWidth={true}
          variant="outlined"
          sx={{mx: 2}}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          error={error}
          helperText="Type your to-do and press enter"
          onKeyPress={async (e) => {
            if (e.key === "Enter") {
              await handleAddTodo()
            }
          }}
        />
      </item>
      <item>
        <Button
          variant="contained"
          sx={{mt: 1, ml: 1, borderRadius: '15px'}}
          onClick={handleAddTodo}
        >
          Save
        </Button>
      </item>
    </Stack>
  )
}

export default CreateTodo