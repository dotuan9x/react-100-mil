import React, {Component, useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';

// class AppB extends Component {
//     constructor() {
//         super();
//
//         this.state = {x: false};
//     }
//
//     componentWillMount() {
//         console.log('componentWillMount')
//     }
//
//     componentDidMount() {
//
//     }
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//
//     }
//
//     shouldComponentUpdate(nextProps, nextState, nextContext) {
//         return true;
//     }
//
//     componentDidCatch(error, errorInfo) {
//
//     }
//
//     componentWillUnmount() {
//
//     }
//
//     x() {
//         const obj = this;
//
//         this.setState({
//             x: true
//         })
//     }
//
//     render() {
//         return (
//             <div className="App">
//               <header className="App-header">
//                   <img key={1} onClick={x} src={logo} className="App-logo" alt="logo" />
//                 <p>
//                   Edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                   Learn React
//                 </a>
//               </header>
//             </div>
//         )
//   }
// }

function App() {
    const [a, setA] = useState(false)

    useEffect(() => {

    }, [])

    useEffect(() => {

    }, [a])

    const x = () => {
      setA(true)
    }

  return (
    <div className="App">
      <header className="App-header">
        <img onClick={x} src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
