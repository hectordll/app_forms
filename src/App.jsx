import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Template from "./Template";
import Home from "./pages/home/Home";
import Form from "./pages/userForm/UserForm";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Template />,
      errorElement: <div>404</div>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'form',
          element: <Form />,
        },
      ]
    }
  ]
)
function App() {

  return <RouterProvider router={router} />
}

export default App;
