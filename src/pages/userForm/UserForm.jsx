import { useState } from 'react'
import './UserForm.css';
import Input from './../../components/forms/Input';
import Checkbox from './../../components/forms/Checkbox';

export default function UserForm() {
const [showCheck, setShowCheck] = useState(false);
const [message, setMessage] = useState('');
const [nom, setNom] = useState('');

const handleSubmit = (event) => {
  event.preventDefault(); // Empêche le rechargement de la page
  setMessage("Votre participation a bien été enregistrée");

};

return (
  
  <div class="user-form d-flex flex-column justify-content-center align-items-center">
    <div className="container my-3">
      <h2 className='title'>Tenter de gagner 2 places pour le parc Asterix</h2>
      <div className="container my-3">
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <div className='FirstName'>
              <label>
                Prénom :
                <Input type='text'/>
              </label>
            </div>
            <div className='LastName'>
              <label>
                Nom :
                <Input type='text' 
                value = {nom}
                onChange = {(e)=> setNom(e.target.value)}
                />
              </label>
            </div>
            <div className='mail'>
              <label>
                Adresse mail :
                <Input type='email'/>
              </label>
            </div>
            <div className='tel'>
              <label>
                Numéro de télephone :
                <Input type='tel'/>
              </label>
            </div>
         
          
            <div className='check-rules'>
              <Checkbox 
                checked={showCheck} 
                onChange = {setShowCheck} 
                label="Accepter les conditions d'utilisation"
              /> 
            </div>
            <div className='button'>
              <button type='submit' disabled={!showCheck}>
                Envoyer
              </button>
            </div>
          </form>  
          {message && <p style={{ color: 'green' }}>{message}</p>}  
        </div>
      
      </div>
    </div>
  </div>
  
);
}

