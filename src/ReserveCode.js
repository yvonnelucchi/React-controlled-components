//
// function App() {
//     const [firstNameValue, setFirstNameValue] = React.useState('');
//     const [leeftijdValue, setLeeftijdValue] = React.useState('');
//
//
//     return (
//         <div className="gegevens-form-container">
//             <h2>Gegevens</h2>
//             <form>
//                 Naam:
//                 <input
//                     placeholder="Typ hier uw naam"
//                     className={firstNameValue.length > 20 ? 'input-error' : ''}
//                     value={firstNameValue}
//                     onChange={(event) => setFirstNameValue(event.target.value)}
//
//                 />
//                 {firstNameValue.length > 20 && <p className="error-message">Deze naam is te lang!</p> }
//             </form>
//
//             <form>
//                 Leeftijd:
//                 <input
//                     placeholder="Uw leeftijd"
//                     className={leeftijdValue.length > 20 ? 'input-error' : ''}
//                     value={leeftijdValue}
//                     onChange={(event) => setLeeftijdValue(event.target.value)}
//                 />
//                 {leeftijdValue.length > 2 && <p className="error-message">Gefeliciteerd, u bent 100 jaar of ouder</p> }
//             </form>
//
//             <form>
//
//
//
//
//             </form>
//
//
//
//
//         </div>
//
//     );
// }