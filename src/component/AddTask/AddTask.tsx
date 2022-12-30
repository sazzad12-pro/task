import { Button, TextInput } from "flowbite-react";
import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../UseContext/UseContext";
import AddTaskDetail from "./AddTaskDetail";

const AddTask = () => {
  const { user } = useContext(AuthContext);
  const [newTodo, setNewTodo] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    fetch("https://server-khaki-beta.vercel.app/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ userEmail: user?.email, newTodo }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("data post");
        }
      });
  };

  return (
    <div>
      <div className="w-[50%] mx-auto mt-10">
        <h1 className="text-center">ADD YOUR DAILY TASK</h1>
        <div>
          <form>
            <TextInput type="text" onChange={handleChange} />
            <Button onClick={handleSubmit}>Submit</Button>
          </form>
        </div>
      </div>
      <AddTaskDetail></AddTaskDetail>
    </div>
  );
};

export default AddTask;
