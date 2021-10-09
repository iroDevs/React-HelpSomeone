import './App.css';
import { Route } from "react-router-dom";
import Inicial from './Pages/Inicial';

//css
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Route exact path="/" render={(...props)=> < Inicial />} />
    </div>
  );
}

export default App;
