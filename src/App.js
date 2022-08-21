import './App.css';
import About from './components/pages/About/About';
import CourseFun from './course.component';
// import Teacher from './Teacher.component';
// import User from './User.component';
// import Counter from './Counter.component';
function App() {
  return (
    <div className="App">
      {/* <User/> */}
      <CourseFun/>
      <About/>
    </div>
  );
}
export default App;
