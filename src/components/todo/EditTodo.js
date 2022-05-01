import {Button, Grid, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {firestore} from "../../services/firestore";

const EditTodo = ({id, setEditMode, todo}) => {
  const [inputValue, setInputValue] = useState(todo);
  const [error, setError] = useState(false);

  const handleUpdateTodo = async () => {
    if (inputValue) {
      const doc = {todo: inputValue}
      await firestore.collection("todos").doc(id).update(doc)
      setEditMode(false)
      setInputValue("")
    } else {
      setError(true)
    }
  }

  useEffect(() => {
    if (!inputValue) setError(true)
    else setError(false)
  }, [inputValue]);

  return (
    <Grid direction="row">
      <TextField
        id="outlined-basic"
        name="input"
        label="Edit To-do"
        fullWidth
        placeholder="Type your to-do"
        variant="outlined"
        sx={{mx: 2}}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        error={error}
        helperText="Type your to-do and press enter"
        onKeyPress={async (e) => {
          if (e.key === "Enter") {
            await handleUpdateTodo()
          }
        }}
      />

      <Button
        variant="contained"
        color="info"
        sx={{mt: 1, ml: 1, borderRadius: '15px'}}
        onClick={() => setEditMode(false)}
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        color="warning"
        sx={{mt: 1, ml: 1, borderRadius: '15px'}}
        onClick={handleUpdateTodo}
      >
        Update
      </Button>
    </Grid>
  )
}

export default EditTodo