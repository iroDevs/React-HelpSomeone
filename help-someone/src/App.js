import './App.css';
import { Route } from "react-router-dom";
import Inicial from './Pages/Inicial';
import PrecisoDeAjuda from './Pages/PrecisoDeAjuda'

//css
import 'bootstrap/dist/css/bootstrap.min.css';
import QueroAjudar from './Pages/QueroAjudar';


function App() {
  return (
    <div className="App">
      <Route exact path="/" render={(...props)=> < Inicial />} />
      <Route exact path="/NeedHelp" render={(...props)=> < PrecisoDeAjuda />} />
       <Route exact path="/Help" render={(...props)=> < QueroAjudar />} />
    </div>
  );
}

export default App;
