import {Stack, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {deleteTodo, setTodos} from "../../lib/redux/Slicers/todoSlice";
import SingleTodo from "./SingleTodo";
import {useEffect} from "react";
import {firestore} from "../../services/firestore";

export const TodoList = () => {
  const dispatch = useDispatch()
  const {todos} = useSelector((state) => state.todo)

  const handleDeleteTodo = async (id) => {
    console.log(id)
    await dispatch(deleteTodo(id))
    // delete from firebase
    await firestore.collection('todos').doc(id).delete()

  }

  useEffect(() => {
    const unsubscribe = firestore.collection("todos").onSnapshot((snapshot) => {
      if (snapshot.empty) {
        dispatch(setTodos([]))
      } else {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({id: doc.id, ...doc.data()})
        })
        dispatch(setTodos(results))
      }
    }, (error) => {
      console.log(error)
    })
    return () => unsubscribe()
  }, []);


  return (<Stack
      direction="column"
      justifyContent="center"
      alignItems="stretch"
      spacing={2}
    > {todos.length === 0 ? <item>
      <Typography color="gray" sx={{mx: 4, my: 3}}>
        Your to-do list is empty!
      </Typography>
    </item> : <>
      <Typography variant={"subtitle1"} color="gray" sx={{pl: 3}}>Your To-do:</Typography>
      {todos.map((node) => <item key={node.id}>
        {/*{JSON.stringify(node)}*/}
        <SingleTodo
          id={node.id}
          todo={node.todo}
          handleDeleteTodo={handleDeleteTodo}
        />
      </item>)}
    </>

    }
    </Stack>)
}

export default TodoList