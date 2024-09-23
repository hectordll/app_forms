import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain='dev-oxyzsu24dhd4i88i.us.auth0.com'
    clientId='nhldy2p0o9FpPEibtz5C4rokoNBJwNY2'
    authorizationParams={{ redirect_uri: window.location.origin }}>
  <App />
</Auth0Provider>
);
