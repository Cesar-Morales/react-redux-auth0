import Routes from './routes';
import { useState, useReducer } from 'react';
import Context from './utils/context';
import * as Reducer from './store/hooks_state/hooks_reducer';
import * as ACTIONS from './store/actions/actions';
import * as UserReducer from './store/hooks_state/user_input_hooks_reducer';

//main app 
const App = () => {

  const [stateGlobal, setStateGlobal] = useState(0);
  
  const [stateContextGlobal, dispatchContextGlobal] = useReducer(Reducer.HooksReducer, Reducer.initialState);
  const [stateUser, dispatchUser] = useReducer(UserReducer.UserReducer, UserReducer.initialState);

    const incrementGlobalState = () => {
      setStateGlobal(stateGlobal + 1);
    }

    const decrementGlobalState = () => {
      setStateGlobal(stateGlobal - 1);
    }

    const handleContextDispatchTrue = () => {
      dispatchContextGlobal(ACTIONS.SUCCESS);
    }

    const handleContextDispatchFalse = () => {
      dispatchContextGlobal(ACTIONS.FAILURE);
    }
    
    const handleuseContextChange = (e) => {
      dispatchUser(ACTIONS.user_input_change(e.target.value));
    }

    const handleuseContextSubmit = (e) => {
      e.preventDefault();
      e.persist();
      dispatchUser(ACTIONS.user_input_submit(e.target.useContext.value));
    }

    return (  
      <div>
        React
        <Context.Provider value={{
                  valueGlobalState: stateGlobal,
                  addGlobalValue: () => incrementGlobalState(),
                  decGlobalValue: () => decrementGlobalState(),

                  reducersGlobalState: stateContextGlobal.stateprop2,
                  dispatchContextTrue: () => handleContextDispatchTrue(),
                  dispatchContextFalse: () => handleContextDispatchFalse(),

                  useContextChange: stateUser.user_text_change,
                  useContextSubmit: stateUser.user_text_submit,
                  useContextHandlerChange: (e) => handleuseContextChange(e),
                  useContextHandlerSubmit: (e) => handleuseContextSubmit(e)
                  }}>
          <Routes />
        </Context.Provider>
      </div>
    );
}


export default App;
