import React, { useReducer } from 'react'; //import useReducer hook

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import reducer, { initialState } from './reducers/index'; //import reducer and initialState

function App() {
  const [state, dispatch] = useReducer(reducer, initialState); //Use useReducer hook to get access to the application state and the dispatch function.s
  console.log(initialState);
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
          {/* 0(TOTAL), X(OPERATION) AND 0(MEMORY) WERE GIVEN AND UPDATED TO {state.TOTAL}, {STATE.OPERATION}, {STATE.MEMORY} */}
            <TotalDisplay value={ state.total }/> 
            <div className="row details">
              <span id="operation"><b>Operation:</b> { state.operation }</span>
              <span id="memory"><b>Memory:</b> { state.memory }</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1}/>
              <CalcButton value={2}/>
              <CalcButton value={3}/>
            </div>

            <div className="row">
              <CalcButton value={4}/>
              <CalcButton value={5}/>
              <CalcButton value={6}/>
            </div>

            <div className="row">
              <CalcButton value={7}/>
              <CalcButton value={8}/>
              <CalcButton value={9}/>
            </div>

            <div className="row">
              <CalcButton value={"+"}/>
              <CalcButton value={"*"}/>
              <CalcButton value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
