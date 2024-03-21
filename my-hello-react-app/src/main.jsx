import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StudentAddForm from "./components/student-form/StudentAddForm.jsx";
import Display from "./components/Display.jsx";
import Counter from "./components/counter/Counter.jsx";
import Todo from "./components/todo/Todo.jsx";
import Fruits from "./components/fruits/Fruits.jsx";
import UserList from "./components/users-fetch-api/UserList.jsx";

// const route = createBrowserRouter([
//   {
//     path: '/',
//     element: <Fruits/>
//   },
//   {
//     path: '/display',
//     element: <Display/>
//   },
//   {
//     path: '/counter',
//     element: <Counter/>
//   },
//   {
//     path: '/todo',
//     element: <Todo/>
//   },
//   {
//     path: '/student-add',
//     element: <StudentAddForm/>
//   },
// ]);

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/display", element: <Display />},
      { path: "/counter", element: <Counter />},
      { path: "/todo", element: <Todo />},
      { path: "/student-add", element: <StudentAddForm />},
      { path: "/user-list", element: <UserList />}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
    {/* <App /> */}
  </React.StrictMode>
);
