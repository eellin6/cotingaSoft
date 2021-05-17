import React, { useState } from 'react';

//Hooks for setting state
const ElevatorButtons = () => {
  const [input, setInput] = useState('');
  const [access, setAccess] = useState(false);
  const [Floor, setFloor] = useState('First Floor');

//CSS
  const centerApp = {
    fontSize: 14,
    color: '#4a54f1',
    textAlign: 'center',
    paddingTop: '100px',
  };

  //Helper Functions
  const verifyPassword = () => {
    if (input === process.env.REACT_APP_PASSWORD) {
      setAccess(true);
    } else {
      alert('Password Denied');
    }
  };

  const removeKey = () => {
    setAccess(false);
    setInput('');
  };

  return (
    <div style={centerApp}>
      <h1>Welcome to the CotingaSoft!</h1>
      <h2>
        <i>The Elevators are just behind me</i>
      </h2>
      <h3>Please Choose Your Floor</h3>
      <div>
        <button className='elevator-button' onClick={verifyPassword}>
          Insert Key
        </button>
        <button onClick={removeKey}>Remove Key</button>
        <input
          type='text'
          placeholder='Level 4 Access'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          name='text'
          className='elevator-input'
        />
        <form className='elevator-form'></form>
      </div>
      {['First', 'Second', 'Third'].map((floor) => (
        <div>
          <input
            type='radio'
            name='floor'
            value={`${floor}-floor`}
            defaultChecked={floor === 'First'}
            onClick={() => setFloor(`${floor} Floor`)}
          />
          <label>{`${floor} Floor`}</label>
        </div>
      ))}
      <input
        type='radio'
        name='floor'
        disabled={!access}
        value='Forth-floor'
        onClick={() => setFloor('Fourth Floor')}
      />
      <label style={{ color: access ? 'green' : 'red' }}>
        Fourth Floor {!access ? 'Locked' : 'Unlocked!'}
      </label>
      <h2>You Are Currently On The: {Floor}</h2>
    </div>
  );
};

export default ElevatorButtons;
