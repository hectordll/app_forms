import { useState } from 'react'
import './UserForm.css'
import { Input } from '../../components/forms/Input'
import { Checkbox } from '../../components/forms/Checkbox'

function UserForm() {
const [showCheck, setShowCheck] = useState(false);
const [message, setMessage] = useState('');

const handleSubmit = (event) => {
  event.preventDefault(); //empêche la page de recharger
  setMessage("Votre participation a bien été enregistrée");
}

return (
  
  <div className="container my-3">
    <h1 className='title'>Tenter de gagner 2 places pour le parc Asterix</h1>
    <Form 
      onSubmit={handleSubmit}
      onShowCheck={setShowCheck}  // Update showCheck based on the checkbox state
      showCheck={showCheck}
    />
    {message && <p style={{ color: 'green' }}>{message}</p>}
  </div>
  
);
}

function Form ({showCheck, onShowCheck}){
  return (
    <div className="container my-3">
      <div className='form'>
        <form>
          <div className='champs'>
            <div className='FirstName'>
              <label>
                Prénom :
                <Input type='text'/>
              </label>
            </div>
            <div className='LastName'>
              <label>
                Nom :
                <Input type='text'/>
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
          </div>
          
          <div className='check-rules'>
            <Checkbox 
              checked={showCheck} 
              onChange={onShowCheck} 
              label="Accepter les conditions d'utilisation"
            /> 
          </div>
          <div className='button'>
            <button type='submit' disabled={!showCheck}>
              Envoyer
            </button>
            
          </div>
        </form>
        
      </div>
    
    </div>
  )
}


export default UserForm
