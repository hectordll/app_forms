import { useState } from 'react'
import './App.css'
import { Input } from './components/forms/Input'
import { Checkbox } from './components/forms/Checkbox'
//import { Button } from './components/forms/Button'

function App() {
const [showCheck, setShowCheck] = useState(false);

return (
  
  <div className="container my-3">
    <h1 className='title'>Tenter de gagner 2 places pour le parc Asterix</h1>
    <Form 
      onShowCheck={setShowCheck}  // Update showCheck based on the checkbox state
      showCheck={showCheck}
    />
  </div>
  
);
}

function Form ({showCheck, onShowCheck}){
  return (
    <div className="container my-3">
      <div className='form'>
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
          <button disabled={!showCheck}>
            Envoyer
          </button>
        </div>
          
      </div>
    
    </div>
  )
}


export default App
