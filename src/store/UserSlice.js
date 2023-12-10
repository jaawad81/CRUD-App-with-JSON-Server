import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      name: "jawad",
      email: "jaddi8940@gmail.com",
      id: 1,
    },
  ],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    create: (state, action) => {
      const user = action.payload.user;
      const data = { id: nanoid(), ...user };
      state.users.push(data);
    },
    update: (state, action) => {
      const data = action.payload.user;
      state.users = state.users.map((user) =>
        user.id === id ? {...data } : user
      );
    },
    remove: (state, action) => {
      const updatedUsers = state.users.filter(
        (user) => user.id !== action.payload
      );
      state.users = updatedUsers;
    },
  },
});

export const { create, update, remove } = userSlice.actions;

export default userSlice.reducer;
