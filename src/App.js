import React from 'react';
import './App.css';

function App() {
    const [firstNameValue, setFirstNameValue] = React.useState('');
    const [leeftijdValue, setLeeftijdValue] = React.useState('');


  return (
    <div className="gegevens-form-container">
        <h2>Gegevens</h2>
        <form>
            <p>Naam:</p>
            <input
                type="text"
                placeholder="Typ hier uw naam"
                name="firstName"
                className={firstNameValue.length > 20 ? 'input-error' : ''}
                value={firstNameValue}
                onChange={(event) => setFirstNameValue(event.target.value)}

            />
            {firstNameValue.length > 20 && <p className="error-message">Deze naam is te lang!</p> }
        </form>

        <form>
            <input
            type="text"
            placeholder="Uw leeftijd"
            name="leeftijd"
            className={leeftijdValue.length > 20 ? 'input-error' : ''}
            value={leeftijdValue}
            onChange={(event) => setLeeftijdValue(event.target.value)}
            />
            {leeftijdValue.length > 2 && <p className="error-message">Gefeliciteerd, u bent 100 jaar of ouder</p> }
        </form>
        <div className="jouw-review-form-container">
            <h2>Jouw review</h2>
            <p> Hoe heb je dit recept gevonden?</p>






        </div>



    </div>

  );
}

export default App;
