import {
  Box,
  Container,
  FormHelperText,
  Input,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Button } from "flowbite-react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      title,
      description,
    };

    dispatch(addTodo(newTodo));
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 2,
        }}
      >
        <Paper
          elevation={4}
          sx={{
            width: "100%",
            maxWidth: 500,
            p: 4,
            borderRadius: 3,
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Add a New Task
          </Typography>

          <Typography variant="body2" color="text.secondary" mb={3}>
            Stay organized. Write it down before you forget.
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            {/* Title */}
            <TextField
              label="Todo Title"
              placeholder="e.g. Complete Redux practice"
              fullWidth
              required
              margin="normal"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            {/* Description */}
            <TextField
              label="Description"
              placeholder="Optional details about this task"
              fullWidth
              multiline
              rows={4}
              margin="normal"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                py: 1.3,
                fontWeight: "bold",
                borderRadius: 2,
              }}
            >
              Add Todo
            </Button>
          </Box>
        </Paper>
      </Box>

      {/* <Container>
        <form action="" method="post">
          <div>
            <FormControl>
              <InputLabel htmlFor="todoTitle-input">Title</InputLabel>
              <Input id="title-input" aria-describedby="todoTitle-text" />
            </FormControl>
          </div>
          <div>
            <FormControl>
              <InputLabel htmlFor="todoText-input">Text</InputLabel>
              <Input id="todoText-input" aria-describedby="todoText-text" />
            </FormControl>
          </div>
          <Button variant="contained" >Contained</Button>
        </form>
      </Container> */}
    </>
  );
};

export default AddTodo;
