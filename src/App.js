import React from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import ClassCounter from "./components/ClassCounter";
import FunctionCounter from "./components/FunctionCounter";
import ClassCounterTwo from "./components/ClassCounterTwo";
import FunctionCounterTwo from "./components/FunctionCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterfour from "./components/HookCountFour";
import UseEff from "./components/UseEff";
import ClassUseEffAlt from "./components/ClassUseEffAlt";
import ClassMouse from "./components/ClassMouse";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/DataFetching";
import DataFetchingTwo from "./components/DataFetchingTwo";
import AppContext from "./usecontext/AppContext";
import CounterOne from "./useReducer/CounterOne";
import CounterTwo from "./useReducer/CounterTwo";
import CounterReducerThree from "./useReducer/CounterThree";
import MultiReducerCounter from "./useReducer/MultiReducerCounter";
import AppCR from "./contextreducer/AppCR";
import AppFetch from "./fetchReducer/AppFetch";
import ParentComponent from "./useCallback/ParentComponent";
import Counter from "./useMemo/Counter";
import FocusInput from "./useRef/FocusInput";
import ClassTimer from "./useRef/ClassTimer";
import FuncTimer from "./useRef/FuncTimer";
import CustomHookContainer from "./customHooksFolder/CustomHookContainer";

function App() {
  return (
    <div className="App">
      {/* 
        <PostList />
        <PostForm />
        <ClassCounter />
        <FunctionCounter />
        <FunctionCounterTwo />
        <ClassCounterTwo />
        <HookCounterThree />
        <HookCounterfour />
        <ClassUseEffAlt />
        <UseEff />  
        <ClassMouse />
        <HookMouse />
        <MouseContainer />
        <IntervalClassCounter />
        <IntervalHookCounter />
        <DataFetching />
        <DataFetchingTwo />
        <AppContext />
        <CounterOne />
        <CounterTwo />
        <CounterReducerThree />
        <MultiReducerCounter />
        <AppCR />
        <AppFetch />
        <ParentComponent />
        <Counter />
        <FocusInput />
        <ClassTimer />
      <FuncTimer />
     */}
      <CustomHookContainer />
    </div>
  );
}

export default App;
