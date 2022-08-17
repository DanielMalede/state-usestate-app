import './App.css';
// import Counter from './Counter.component';
import AddUser from './AddUser.component';
// import User from "./User.component"
function App() {
  return (
    <div className="App">
      {/* <Counter num={2}/> */}
      {/* <User/> */}
      <AddUser firstname="Danil" lName="Malede" agee="25" emaill="daniel@gmail.com" passwordd="123456"/>
      {/* <AddUser/> */}
    </div>
  );
}

export default App;
