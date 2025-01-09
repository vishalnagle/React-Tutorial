
import './App.css';
import Counter from './hooks/useState/Counter';
import ObjectState from './hooks/useState/ObjectState';
import UpdatingArray from './hooks/useState/UpdatingArray';
import DataFetch from './hooks/useEffect/DataFetch';
import CleanUp from './hooks/useEffect/CleanUp';
import MultiEffects from './hooks/useEffect/MultiEffects';
import AsyncEffect from './hooks/useEffect/AsyncEffect';
import ThemeProvider from './hooks/useContext/ThemeProvider';
import ThemedComponent from './hooks/useContext/ThemedComponent';
import ReducerCounter from './hooks/useReducer/ReducerCounter';
import SignupForm from './hooks/useReducer/SignupForm';
import ReducerTodoList from './hooks/useReducer/ReducerTodoList';

function App() {
  return (
    <div className="App">

      {/* 1.useState examples */}

      {/* <Counter /> */}
      {/* <ObjectState /> */}
      {/* <UpdatingArray /> */}

      {/* 2.useEffect examples */}

      {/* <DataFetch />  */}
      {/* <CleanUp /> */}
      {/* <MultiEffects/> */}
      {/* <AsyncEffect /> */}

      {/* 3.useContext example */}
      {/* <ThemeProvider>
        <ThemedComponent />
      </ThemeProvider> */}

      {/* 4.useReducer example */}

      {/* <ReducerCounter/> */}
      {/* <SignupForm/> */}
      {/* <ReducerTodoList/> */}

      
    </div>
  );
}

export default App;
