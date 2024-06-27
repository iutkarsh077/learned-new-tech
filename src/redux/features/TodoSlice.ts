"use client";
import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit'
import axios from "axios";
export const getTodos = createAsyncThunk("getTodos", async () => {
    const data = await axios.get("/api/getUsers");
    return data;
})
const initialState = {
    loading: false,
    todos: [{ id: nanoid(), title: '' }],
    error: ''
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,

    extraReducers: builder => {
        builder.addCase(getTodos.pending, state => {
            state.loading = true
        })
        builder.addCase(getTodos.fulfilled, (state, action) => {
            state.loading = false
            state.todos = action.payload.data
            state.error = ''
        })
        builder.addCase(getTodos.rejected, (state, action) => {
            state.loading = false
            state.todos = []
        })
    },

    reducers: {
        addTodo: (state, action) => {
            console.log(action.payload);
            const todo = {
                id: action.payload.data.id,
                title: action.payload.data.title,
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})
export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer