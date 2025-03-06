import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Hello from './Hello';

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo animate-spin" alt="logo" />
          <p className='bg-sky-300 text-sky-900 rounded-md p-2 selection:text-white'>
            Edit <code>src/App.js</code> and save to reload
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Link to={'/home'}>
              Learn React ☻            
            </Link>
          </a>
        </header>
      </div>
      <Routes>
        <Route path='/home' element={<Hello />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
