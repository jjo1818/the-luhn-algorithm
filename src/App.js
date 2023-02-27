// import logo from './logo.svg';
import './App.css';
import {useState } from 'react' ;


function App() {

  let [input, setInput] = useState("")
  let [check, setCheck] = useState('Check Credit Card')

  function handleChange(evt) {
    setInput(evt.target.value)
      checkCardNum(evt.target.value)
    // console.log()
  } 

  function checkCardNum() {
    let reverse= input.split("").reverse().join("")

    let inputArr = reverse.split('')
    //  console.log()

  
   let luhnArr = [];

   for (let i = 0; i < inputArr.length;i++) {
    (i % 2=== 0) ? lunArr.push(inputArr[i]): luhnArr.push(inputArr[i]* 10)
   }
   let luhnAllDigits = luhnArr.join('').split('')

  //  console.log(luhnAllDigits);

  let luhnsum = 0
  luhnAllDigits.forEach((x) => luhnsum += Number(x))

  luhmSum === 0? setCheck('Enter Credit Card'):
   luhnsum%10 === 0 && luhnSum>20? setCheck('Card is Valid'):
   setCheck('Card is Invalid')
  }

  // console.log(luhnArr)
  let luhnAllDigits = luhnArr.join('').split('')

  // console.log()

  let luhnSum = 0

  luhnAllDigits.forEach((x) => luhnsum += Number (x))

}

return (
  <div className="App">
    <input value={input} onChange={handleChange}/> {/*input element
  {/* <div>reverse: {reverse}</div> */}
  {/* <div>luhnArr: {luhnArr}</div> */}
  {/* <div>sum: {luhnSum}</div> */}
  <div>{check}</div>
  </div>

);



//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

