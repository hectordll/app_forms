import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import UserForm from './pages/userForm/UserForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserForm />
  </StrictMode>,
)
