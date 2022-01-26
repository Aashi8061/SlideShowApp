import React, {useEffect, useState, useReducer} from 'react';

function reducer(state, action) {
    switch (action.type) {
      case 'prev':
        return { temp: state.temp - 1 };
      case 'next':
        return { temp : state.temp + 1 };
      case 'restart':
        return { temp:0 };
      default:
        throw new Error();
    }
  } 

function Slides(props) {
const [state, dispatch] = useReducer(reducer, {temp:0});
const [disableNextButton, setDisableNextButton] = useState(false);
const [disablePrevButton, setDisablePrevButton] = useState(true);
const [disableRestartButton, setDisableRestartButton] = useState(true);

const lenOfData = props.values.length;

    useEffect(()=>{   
        switch (true) {
            case (state.temp === 0):
                setDisableNextButton(false);
                setDisablePrevButton(true);
                setDisableRestartButton(true);
              break;
            case ((state.temp > 0) && (state.temp < (lenOfData-1))):
                setDisableNextButton(false);
                setDisablePrevButton(false);
                setDisableRestartButton(false);
              break;
            case (state.temp === (lenOfData-1)):
                setDisableNextButton(true);
                setDisablePrevButton(false);
                setDisableRestartButton(false); 
              break;
          }       
    },[state.temp,disableNextButton,disablePrevButton,disableRestartButton,lenOfData]);

    const nextButtonDisabled = <button data-testid="button-next" className="small" disabled="disabled">Next</button>  
    const nextButtonEnabled = <button data-testid="button-next" className="small" onClick = {() => dispatch({ type: 'next' })}>Next</button>
    
    const prevButtonDisabled = <button data-testid="button-prev" className="small" disabled="disabled">Prev</button>
    const prevButtonEnabled = <button data-testid="button-prev" className="small" onClick = {() => dispatch({ type: 'prev' })}>Prev</button>

    const restartButtonDisabled = <button data-testid="button-restart" className="small outlined" disabled="disabled">Restart</button> 
    const restartButtonEnabled = <button data-testid="button-restart" className="small outlined" onClick = {() => dispatch({ type: 'restart' })} >Restart</button> 
    return  (
        <div>
        <div id="navigation" className="text-center">        
            {disableRestartButton? restartButtonDisabled : restartButtonEnabled}
            {disableNextButton ? nextButtonDisabled : nextButtonEnabled}
            {disablePrevButton ? prevButtonDisabled : prevButtonEnabled}

        </div>
        <div id="slide" className="card text-center">
                <h1 data-testid="title">{props.values[state.temp].title}</h1>
                <p data-testid="text">{props.values[state.temp].text}</p>
        </div>
    </div>
);
}

export default Slides;
