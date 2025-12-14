import {
  Divider,
  IconButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Checkbox, List, ListItem } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";

const AllTodos = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <>
      <div className="p-4 min-h-screen flex flex-col items-center ">
        <List sx={{ width: "100%", maxWidth: 900, mx: "auto", mt: 4 }}>
          {todos.map((todo) => (
            <ListItem
              sx={{
                bgcolor: "background.paper",
                borderRadius: 2,
                mb: 1,
                boxShadow: 1,
              }}
              key={todo.id}
              secondaryAction={
                <IconButton edge="end" color="error">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemIcon>
                <Checkbox />
              </ListItemIcon>

              <ListItemText
                primary={todo.title}
                secondary={todo.description}
                primaryTypographyProps={{
                  fontSize: "1rem",
                  fontWeight: 600,
                }}
                secondaryTypographyProps={{
                  fontSize: "0.875rem",
                  color: "text.secondary",
                }}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
};

export default AllTodos;
