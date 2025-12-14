import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            title: "MAH",
            description: "hello"
        }
    ]
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log(action.payload);
            const todo = {
                id: nanoid(),
                title: action.payload.title,
                description: action.payload.description
            }
            state.todos.push(todo)
            // console.log("state", state);
            // console.log("action", action);
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },

        editTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
})

export default todoSlice.reducer;
export const { addTodo, removeTodo, editTodo } = todoSlice.actions;