import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import Template from "./Template";
import LoginBtn from "./components/LoginBtn";
import Home from "./pages/home/Home";
import Form from "./pages/Form";
import Authentification from "./pages/Authentification";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

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



#const App = () => {
#  const { isAuthenticated } = useAuth0();

 # return (
 #   <>
 #     <Router>
 #       <div>
 #        <Navbar />
 #         <Routes>
 #           <Route path="/" element={<Home />} />
 #         </Routes>
 #       </div>
 #     </Router>
 #   </>
 # );
#};


#export default App;
