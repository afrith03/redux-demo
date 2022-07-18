import './App.css';
import Addbalance from './components/Addbalance';
import Name from './components/Name';
import NavBar from './components/NavBar';
import True from './components/true';


// npm i redux react-redux redux-thunk
function App() {
  return (
    <div className="App">
    <NavBar/>
    <Addbalance/>
    <Name/>
    <True/>
    </div>
  );
}

export default App;
