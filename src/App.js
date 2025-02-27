import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import { initialState } from './reducers/index';
import reducer from './reducers';
import { changeOperator, applyNumber, clearDisplay, memorySave, memoryApplied, memoryClear } from './actions/index';


function App() {

  const handleNum = (num) => {
    console.log(num)
    dispatch(applyNumber(num))
  };

  const handleOperator = (operator) => {
    dispatch(changeOperator(operator))
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={(e) => dispatch(memorySave())} value={"M+"}/>
              <CalcButton onClick={(e) => dispatch(memoryApplied())} value={"MR"}/>
              <CalcButton onClick={(e) => dispatch(memoryClear())} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={(e) => handleNum(parseInt(e.target.innerText))} value={1} />
              <CalcButton onClick={(e) => handleNum(parseInt(e.target.innerText))} value={2}/>
              <CalcButton onClick={(e) => handleNum(parseInt(e.target.innerText))} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={(e) => handleNum(parseInt(e.target.innerText))} value={4}/>
              <CalcButton onClick={(e) => handleNum(parseInt(e.target.innerText))} value={5}/>
              <CalcButton onClick={(e) => handleNum(parseInt(e.target.innerText))} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={(e) => handleNum(parseInt(e.target.innerText))} value={7}/>
              <CalcButton onClick={(e) => handleNum(parseInt(e.target.innerText))} value={8}/>
              <CalcButton onClick={(e) => handleNum(parseInt(e.target.innerText))} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={(e) => handleOperator(e.target.innerText)} value={"+"}/>
              <CalcButton onClick={(e) => handleOperator(e.target.innerText)} value={"*"}/>
              <CalcButton onClick={(e) => handleOperator(e.target.innerText)} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={() => dispatch(clearDisplay())} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
