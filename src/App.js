import React, { useReducer } from 'react'; //import useReducer hook

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import reducer, { initialState } from './reducers/index'; //import reducer and initialState

import { addOne, applyNumber, changeOperation, clearDisplay, memoryPlus, memoryR, memoryC } from './actions/index'; //import addOne from actions
function App() {
  const [state, dispatch] = useReducer(reducer, initialState); //Use useReducer hook to get access to the application state and the dispatch function.s
  console.log(initialState);

  // const handleAddOne = () => {
  //   dispatch(addOne(1));
  // }

  //console.log(handleAddOne);

  const handleApplyNumber = (number) => {
    dispatch(applyNumber(number))
  }

  const handleOperators = (operation) => {
    dispatch(changeOperation(operation));
  }

  const handleClear = () => {
    dispatch(clearDisplay());
  }
  
  const handleMemoryPlus = () => {
    dispatch(memoryPlus());
  }

  const handleMemoryR = () => {
    dispatch(memoryR());
  }

  const handleMemoryC = () => {
    dispatch(memoryC());
  }
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
              <CalcButton onClick={handleMemoryPlus} value={"M+"}/>
              <CalcButton onClick={handleMemoryR} value={"MR"}/>
              <CalcButton onClick={handleMemoryC} value={"MC"}/>
            </div>

            <div className="row">
              {/* <CalcButton onClick={handleAddOne} value={1} /> */}
              <CalcButton onClick={() => handleApplyNumber(1)} value={1}/>
              <CalcButton onClick={() => handleApplyNumber(2)} value={2}/>
              <CalcButton onClick={() => handleApplyNumber(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleApplyNumber(4)} value={4}/>
              <CalcButton onClick={() => handleApplyNumber(5)} value={5}/>
              <CalcButton onClick={() => handleApplyNumber(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleApplyNumber(7)} value={7}/>
              <CalcButton onClick={() => handleApplyNumber(8)} value={8}/>
              <CalcButton onClick={() => handleApplyNumber(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleOperators("+")} value={"+"}/>
              <CalcButton onClick={() => handleOperators("*")} value={"*"}/>
              <CalcButton onClick={() => handleOperators("-")} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={handleClear} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
