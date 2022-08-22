import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavScrollExample from './components/Navbar/NavBar'
import ItemListContainer from './containers/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavScrollExample />
      <ItemListContainer greeting="Tienda de Vinilos" />
  
    </div>
  );
}

export default App;
