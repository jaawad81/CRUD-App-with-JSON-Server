import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { remove } from "../store/UserSlice";
import { Container, Button } from "./widgets/index";

const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.userSlice.users);
 
  return (
    <Container className="flex  flex-col  gap-3">
      <h2 className="text-3xl font-bold text-center">
        CRUD App with JSON Server
      </h2>
      <Button to="/create" className=" bg-green-500 hover:bg-green-700 mr-auto">
        Create+
      </Button>

      <div className="overflow-y-auto text-[16px]">
        <table className="w-full">
          <thead className="bg-stone-200">
            <tr className="grid grid-cols-3 border-b-2">
              <th className="py-2 ">Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user.id} className="grid grid-cols-3 border-b-2">
                <td className="py-2">{user.name}</td>
                <td className="py-2">{user.email}</td>
                <td className="py-2 flex justify-evenly">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/update", { state: { user: user } });
                    }}
                    className="bg-blue-600 hover:blue-red-800 py-2 px-4 rounded-lg text-white"
                  >
                    update
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(remove(user.id));
                    }}
                    className="bg-red-600 hover:bg-red-800 py-2 px-4 rounded-lg text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Users;
