import Template from "./Template";
// import Home from "./pages/home";
import Form from "./pages/Form";
import Authentification from "./pages/Authentification";
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
          element: <Form />,
        },
        {
          path: 'form',
          element: <Form />,
        },
        {
          path: 'authentification',
          element: <Authentification />,
        },
      ]
    }
  ]
)
function App() {

  return <RouterProvider router={router} />
}
export default App;
