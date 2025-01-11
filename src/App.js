
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
import CallbackUse from './hooks/useCallback/CallbackUse';
import PassingCallback from './hooks/useCallback/PassingCallback';
import DependencyCallback from './hooks/useCallback/DependencyCallback';
import ExpensiveOperation from './hooks/useCallback/ExpensiveOperation';
import MemoBasicUsage from './hooks/useMemo/MemoBasicUsage';
import FilterArrayMemo from './hooks/useMemo/FilterArrayMemo';
import ReCreationFunc from './hooks/useMemo/ReCreationFunc';
import MemoDerivedData from './hooks/useMemo/MemoDerivedData';
import DomAccess from './hooks/useRef/DomAccess';
import CounterRef from './hooks/useRef/CounterRef';
import TimerRef from './hooks/useRef/TimerRef';
import PreviousStateRef from './hooks/useRef/PreviousStateRef';
import ParentImperative from './hooks/useImperativeHandle/ParentImperative';
import DOMDimensions from './hooks/useLayoutEffect/DOMDimensions';
import ScrollToBottom from './hooks/useLayoutEffect/ScrollToBottom';
import SyncedState from './hooks/useLayoutEffect/SyncedState';
import DebugCounter from './hooks/useDebugValue/DebugCounter';
import LargeListFilter from './hooks/useTransition/LargeListFilter';
import SearchFilter from './hooks/useDeferredValue/SearchFilter';

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

      {/* 4.useReducer examples */}

      {/* <ReducerCounter/> */}
      {/* <SignupForm/> */}
      {/* <ReducerTodoList/> */}

      {/* 5. useCallback examples */}
      {/* <CallbackUse/> */}
      {/* <PassingCallback/> */}
      {/* <DependencyCallback/> */}
      {/* <ExpensiveOperation/> */}


      {/* 6. useMemo examples */}

      {/* <MemoBasicUsage/> */}
      {/* <FilterArrayMemo/> */}
      {/* <ReCreationFunc/> */}
      {/* <MemoDerivedData/> */}

      {/* 7. useRef examples */}
      {/* <DomAccess/> */}
      {/* <CounterRef/> */}
      {/* <TimerRef/> */}
      {/* <PreviousStateRef/> */}


      {/* 8. useImperativeHandle example */}

      {/* <ParentImperative/> */}


      {/* 9. useLayoutEffect examples */}

      {/* <DOMDimensions /> */}
      {/* <ScrollToBottom/> */}
      {/* <SyncedState/> */}


      {/* 10. useDebugValue example */}
      {/* <DebugCounter/> */}


      {/* 11. useTransition example */}

      {/* <LargeListFilter/> */}

      {/* 12. useDeferredValue example */}

      {/* <SearchFilter/> */}

      

    </div>
  );
}

export default App;
