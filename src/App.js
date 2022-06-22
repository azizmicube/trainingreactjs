import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import DetailCategory from './pages/DetailCategory';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/category' element={<CategoryPage/>}/>
            <Route path='/detail/:category' element={<DetailCategory/>}/>
        </Routes>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        >
        Learn React
        </a>
      </header> */}
    </div>
      </BrowserRouter>
  );
}

export default App;
