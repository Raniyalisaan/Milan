import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Register from './components/Register';
import { Routes,Route } from 'react-router-dom';
import StateBasics from './components/StateBasics';
import Counter from './components/Counter';
import Use from './components/Use';
import Viewdata from './components/Viewdata';

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      {/*<Login/>*/}
      {/*<Signup/>*/}
      <Navbar/>
      <Routes>
        <Route path='/reg' element={<Register/>}/>
        <Route path='/u' element={<StateBasics/>}/>
        <Route path='/c' element={<Counter/>}/>
        <Route path='/a' element={<Use/>}/>
        <Route path='/v' element={<Viewdata/>}/>
       </Routes>
      
    </div>
  );
}

export default App;
