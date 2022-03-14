import React, {useState, useReducer, useContext} from 'react';
import * as ACTIONS from '../store/actions/actions';
import * as UserReducer from '../store/hooks_state/user_input_hooks_reducer';
import Context from '../utils/context';

const HooksForm = () => {

    const context = useContext(Context)

    const [valueChange, setValueChange] = useState('');
    const [valueSubmit, setValueSubmit] = useState('');

    const [userState, userDispatch] = useReducer(UserReducer.UserReducer, UserReducer.initialState);

    const handleuseStateChange = (e) => {
        setValueChange(e.target.value);
    }

    const handleuseStateSubmit = (e) => {
        e.preventDefault();
        setValueSubmit(e.target.useState.value);
    }
    
    const handleuseReducerChange = (e) => {
        userDispatch(ACTIONS.user_input_change(e.target.value));
    }

    const handleuseReducerSubmit = (e) => {
        e.preventDefault();
        userDispatch(ACTIONS.user_input_submit(e.target.useReducer.value));
    }

    return (
        <div>
            <form onSubmit={handleuseStateSubmit}>
                <label>React useState: </label>
                <input id='useState' type='text' onChange={handleuseStateChange}></input>
                <button type='submit'>Submit</button>
            </form>
            
            <form onSubmit={handleuseReducerSubmit}>
                <label>React useReducer: </label>
                <input id='useReducer' type='text' onChange={handleuseReducerChange}></input>
                <button type='submit'>Submit</button>
            </form>

            <form onSubmit={context.useContextHandlerSubmit}>
                <label>React useContext: </label>
                <input id='useContext' type='text' onChange={context.useContextHandlerChange}></input>
                <button type='submit'>Submit</button>
            </form>
            
            <div>
                <h2> React useState: </h2>
                <p> Change: {valueChange} </p>
                <p> Submit: {valueSubmit} </p>
                <br/>
                <h2> React useReducer: </h2>
                <p> Change: {userState.user_text_change} </p>
                <p> Submit: {userState.user_text_submit} </p>
                <br/>
                <h2> React useContext: </h2>
                <p> Change: {context.useContextChange} </p>
                <p> Submit: {context.useContextSubmit} </p>
            </div>
        </div>
    )

}

export default HooksForm;