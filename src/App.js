import React from 'react'
//import User from './User';
import './App.css';
import HomeContainer from './containers/HomeContainer'
import ChildComponent from './components/childComponent';


function App() {
  function Parentdata(name){
    alert(name)
  }
  //const name="Rahul Kinge"
  
  
  return (
    <div className="App">
      {/* <ChildComponent alert={Parentdata} /> */}
      <HomeContainer />
      

    </div>
  );
}

export default App;
