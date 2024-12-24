import logo from './logo.svg';
import './App.css';
import Router from 'Router';
import Home from './Home';
import Person from './Person';
import Header from './Header';
import Embeddede from './Embeddede';
import { BrowserRouter,Link,Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import PageNotFound from './PageNotFound';
import StateChange from './StateChange';
import Hello from './Hello';
import Ueffect from './Ueffect';
import Uref from './Uref';
import UsEff from './UsEff';
import Axi from './Axi';


function App() {
  return (
    <div className="App">
      <header >
       
	<h2>Welcome  to react app</h2>
	<h1 >React automatically reloads</h1>
  </header>

  <BrowserRouter>
  <Link to="/home">Home</Link> &nbsp; &nbsp;
  <Link to="/person">Person</Link> &nbsp; &nbsp;
  <Link to="/header">Header</Link> &nbsp; &nbsp;
  <Link to="/menu">Menu</Link> &nbsp; &nbsp;
  <Link to="/statechange">Change</Link> &nbsp; &nbsp;
  <Link to="/hello">Statech</Link>&nbsp;&nbsp; &nbsp;
  <Link to="/ue">Ueff</Link>&nbsp;&nbsp; &nbsp;
  <Link to="/ur">reff</Link>&nbsp; &nbsp;
  <Link to="/uf">ucount</Link>&nbsp; &nbsp;
  <Link to="/ax">GetAxios</Link>

      <Routes>
        <Route path='/home' element={<Home></Home>}>   
        </Route>
        <Route path='/person' element={<Person></Person>}>   
        </Route>
          <Route path='/header' element={<Header></Header>}>   
        </Route> 
        <Route path='/menu' element={<Menu></Menu>}>   
        </Route> 
         <Route path='/statechange' element={<StateChange></StateChange>}>   
        </Route>
        <Route path='/hello' element={<Hello></Hello>}></Route>
        <Route path='/ue' element={<Ueffect></Ueffect>}></Route>
        <Route path='/ur' element={<Uref></Uref>}></Route>
        <Route path='/uf' element={<UsEff></UsEff>}></Route>
        <Route path='/ax' element={<Axi></Axi>}></Route>

      </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
