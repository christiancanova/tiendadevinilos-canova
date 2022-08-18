import logo from './logo.svg';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css'
import NavScrollExample from './components/Navbar/index'


function App() {
  return (
    <div className="App">
      <NavScrollExample />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          TIENDA DE VINILOS
        </p>
        
      </header>
    </div>
  );
}

export default App;
