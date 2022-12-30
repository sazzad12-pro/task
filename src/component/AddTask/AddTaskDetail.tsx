import React, { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../UseContext/UseContext";

const AddTaskDetail = () => {
  const { user } = useContext(AuthContext);
  const {
    data: tasks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await fetch(
        `https://server-sazzad12-pro.vercel.app/user?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      {tasks.map((x: any) => (
        <ul>
          <li>{x.newTodo}</li>
        </ul>
      ))}
    </div>
  );
};

export default AddTaskDetail;
