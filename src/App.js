import './App.css';
// import Counter from './Counter.component';
// import User from "./User.component"
import AddUser from './AddUser.component';
import PrintUserTable from './UseTable.component';
function App() {
  return (
    <div className="App">
      {/* <Counter num={2}/> */}
      {/* <User/> */}
      <AddUser firstname="Danil" lName="Malede" Age="25" Email="daniel@gmail.com" Password="123456"/>
      <PrintUserTable/>
    </div>
  );
}

export default App;
