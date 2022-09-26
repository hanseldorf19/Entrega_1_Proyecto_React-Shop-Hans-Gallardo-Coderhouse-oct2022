import './App.css';
import { NavBar} from './components/NavBar/NavBar';
import { ProdListContainer } from './components/ProdListContainer/ProdListContainer'
function App() {
  return (
    <div>
      <header className="App-header">
        <NavBar/>
      </header>
      <ProdListContainer/>
      </div>
  );
}

export default App;
