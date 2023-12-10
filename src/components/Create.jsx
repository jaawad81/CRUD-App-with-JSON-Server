import React, { useState, useRef } from "react";
import Input from "./widgets/Input";
import { Button, Container } from "./widgets";
import { useDispatch } from "react-redux";
import { create, update } from "../store/UserSlice";
import { useNavigate, useLocation } from "react-router-dom";

const Create = () => {
  const location = useLocation();
  const user = location.state && location.state.user;
  const id = user?.id;
  const [data, setData] = useState({
    name: user?.name || "",
    email: user?.email || "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = data;
    dispatch(create({ user }));
    setData({ name: "", email: "" });
    navigate("/");
  };

  const updateHandle = (e) => {
    e.preventDefault();
    const user = { id, ...data };
    dispatch(update({ user }));
    setData({ name: "", email: "" });
    navigate("/");
  };

  return (
    <Container className="w-[400px] flex justify-center items-center flex-col gap-4 border border-blue-700">
      <h2 className="text-4xl font-bold">
        {id ? "Update User" : "Create New User"}
      </h2>
      <Input
        label="User"
        type="User"
        placeholder="Enter Your Name Here"
        name="name"
        value={data.name}
        onChange={(e) => handleChange(e)}
      />
      <Input
        label="Email"
        type="email"
        placeholder="Enter Your Email Here"
        name="email"
        value={data.email}
        onChange={(e) => handleChange(e)}
      />
      <button
        className="py-2 px-4 text-white bg-blue-600 hover:bg-blue-800 rounded-lg"
        onClick={(e) => {
          id ? updateHandle(e) : handleSubmit(e);
        }}
      >
        {id ? "Update" : "New User"}
      </button>
    </Container>
  );
};

export default Create;
