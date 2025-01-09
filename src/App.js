
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



    </div>
  );
}

export default App;
