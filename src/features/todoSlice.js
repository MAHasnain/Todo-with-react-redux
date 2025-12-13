import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todo: [
        {
            id: 1,
            text: "hello"
        }
    ]
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todos = {
                id: nanoid(),
                text: action.payload
            }
            state.todo.push(todos)
        },

        removeTodo: (state, action) => {
            state.todo = state.todo.filter(todo => todo.id !== action.payload)
        },

        editTodo: (state, action) => { 
            state.todo = state.todo.filter(todo => todo.id !== action.payload)
         }
    }
})

export default todoSlice.reducer;
export const { addTodo, removeTodo, editTodo } = todoSlice.actions;