import { createBrowserRouter } from "react-router-dom";
import AddTask from "../component/AddTask/AddTask";

import MyTask from "../component/MyTask/MyTask";
import Login from "../component/SingUP/Login";
import Register from "../component/SingUP/Register";
import Main from "../Layout/Main";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <AddTask></AddTask>,
      },
      {
        path: "/myTask",
        element: <MyTask></MyTask>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
