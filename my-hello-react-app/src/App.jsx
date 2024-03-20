import ButtonMessage from "./components/ButtonMessage";
import Display from "./components/Display";
import ActorList from "./components/actors/ActorList";
import Fruits from "./components/fruits/Fruits";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
import StudentAddForm from "./components/student-form/StudentAddForm";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
      {/* <Display/>  
      <Display/>  
      <ButtonMessage/> */}
      {/* <Fruits/> */}
      {/* <ActorList></ActorList> */}
      {/* <Counter></Counter> */}
      {/* <Todo></Todo> */}
      {/* <StudentAddForm></StudentAddForm> */}
    </>
    
  );
}

export default App
