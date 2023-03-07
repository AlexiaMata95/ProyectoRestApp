import { BrowserRouter as Router, Route } from 'react-router-dom';
import home from './components/home';
import Menu from './components/Menu';
import Reservaciones from './components/Reservaciones';

function App() {
  return (
    <Router basename='/ProyectoRestApp'>
      <Route exact path='/https://alexiamata95.github.io/ProyectoRestApp/' component={home}/>
      <Route exact path='/https://alexiamata95.github.io/ProyectoRestApp//reservaciones' component={Reservaciones}/>
      <Route exact path='/https://alexiamata95.github.io/ProyectoRestApp/menu' component={Menu}/>
    </Router>
  );
}

export default App;
