import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    idCount: 3,
    tasks: [
      {
        id: 1,
        title: "TASK A",
        completed: false,
      },
      {
        id: 2,
        title: "TASK B",
        completed: true,
      },
      {
        id: 3,
        title: "TASK C",
        completed: false,
      },
    ],
  },
  reducers: {
    newTask: (state, action) => {
      state.idCount++;
      const newItem = {
        id: state.idCount,
        title: action.payload,
        completed: false,
      };
      state.tasks = [...state.tasks, newItem];
    },
    completeTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
  },
});

export const { newTask, completeTask, deleteTask } = taskSlice.actions;

export const selectTasks = (state) => state.task.tasks;

export default taskSlice.reducer;
