import React, {useState} from 'react';
require('dotenv').config();

function ElevatorButtons() {
  const [input, setInput] = useState('');
  const [access, setAccess] = useState(false);
  const [Floor, setFloor] = useState('First Floor');

  const currentFloor = (floor) => {
    setFloor(floor)
  }

  //teranary
  const verify = () => {
    if(input === process.env.REACT_APP_PASSWORD) {
      setAccess(true);
      alert('Fourth Floor ON!')
    } else {
      //cleaner example (possibly snackbar)
      alert('Incorrect Password!')
    }
  }

  const removeKey = () => {
    setAccess(false);
    setInput('');
    alert('Fourth Floor OFF!')
  }

  return (
    <div>
      <h3>Choose Your Floor</h3>
      <h2>You Are Currently On The: {Floor}</h2>
      <div>
      <button className='elevator-button' onClick={verify}>Insert Key</button><button onClick={removeKey}>Remove Key</button>
        <input type='text'
        placeholder='Level 4 Access'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        name='text'
        className='elevator-input'
      />
      <form className='elevator-form'>
      </form>
      </div>
      {
        access ? <div>
          <input type='radio' name='floor' value='first-floor' defaultChecked onClick={() => currentFloor('First Floor')}/>First Floor
      <input type='radio' name='floor' value='Second-floor' onClick={() => currentFloor('Second Floor')}/>Second Floor
      <input type='radio' name='floor' value='Third-floor' onClick={() => currentFloor('Third Floor')}/>Third Floor
      <input type='radio' name='floor' value='Forth-floor' onClick={() => currentFloor('Fourth Floor')}/>Fourth Floor
        </div>
        : <div>
          <input type='radio' name='floor' value='first-floor' defaultChecked onClick={() => currentFloor('First Floor')}/>First Floor
      <input type='radio' name='floor' value='Second-floor' onClick={() => currentFloor('Second Floor')}/>Second Floor
      <input type='radio' name='floor' value='Third-floor' onClick={() => currentFloor('Third Floor')}/>Third Floor
        </div>
      }
    </div>
  )
}

export default ElevatorButtons
