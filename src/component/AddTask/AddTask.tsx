import { Button, TextInput } from "flowbite-react";
import React, { ChangeEvent, FormEvent, useState } from "react";

const AddTask = () => {
  const [newTodo, setNewTodo] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ newTodo }),
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
    </div>
  );
};

export default AddTask;