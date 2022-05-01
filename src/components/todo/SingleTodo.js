import {Card, Grid, IconButton, Typography} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EditTodo from "./EditTodo";
import {useState} from "react";

const SingleTodo = ({id, todo, handleDeleteTodo}) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <Card sx={{mx: 2, px: 3, py: 2}}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid>
          {
            editMode ? <EditTodo
                id={id}
                todo={todo}
                setEditMode={setEditMode}/> :
              <Typography variant={"h6"}>{todo}</Typography>
          }
        </Grid>

        {
          !editMode ?
            <Grid>
              <IconButton
                aria-label="edit"
                size="large"
                onClick={() => {
                  setEditMode(true)
                }}
              >
                <EditIcon fontSize="inherit"/>
              </IconButton>
              <IconButton
                aria-label="delete"
                size="large"
                onClick={async () => {
                  await handleDeleteTodo(id)
                }}
              >
                <DeleteIcon fontSize="inherit"/>
              </IconButton>

            </Grid>
            : null
        }
      </Grid>
    </Card>
  )
}

export default SingleTodo