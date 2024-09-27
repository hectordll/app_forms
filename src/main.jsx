import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import UserForm from './pages/userForm/UserForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserForm />
  </StrictMode>,
)
