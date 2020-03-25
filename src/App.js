import React, { Component } from 'react';
import './App.css';

//FUNCTIONAL COMPONENT
// function App() {
//   return (
//     <div className="App">
//       <h1>Shara says Hello World</h1>
//       You can use the mark tag to <mark>highlight</mark> text.
//     </div>
//   );
// }

//CHANGING TO CLASS BASED COMPONENT
//* replace funtion with 'class' and remove () after App
//* cant return directly from a class, we need a method render()
//* render is a life cycle methhod that runs at a certain point, it is required
//* extend the core react component class with React.Component
//can use class App extends React.component or
// remove the React from React.component and add { component } to the react import

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Shara says Hello World</h1>
          <p className="text-uppercase">Bootstrap is working, all uppercase</p>
      </div>
    )
  }
}

export default App;
