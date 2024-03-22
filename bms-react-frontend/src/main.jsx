import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import BookList from './components/BookList.jsx';
import BookAdd from './components/BookAdd.jsx';
import BookView from './components/BookView.jsx';
import BookEdit from './components/BookEdit.jsx';

const route = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {path: '/', element: <BookList/>},
      {path: '/book-list', element: <BookList/>},
      {path: '/book-view/:bid', element: <BookView/>}, // here bid is a route parameter
      {path: '/book-add', element: <BookAdd/>},
      {path: '/book-edit/:bookId', element: <BookEdit/>}
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>,
)
