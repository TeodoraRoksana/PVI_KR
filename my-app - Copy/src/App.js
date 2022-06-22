import './App.css';

import {Home} from './Home';
import {Department} from './Department';
import {Navigation} from './Navigation';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>

     <Navigation/>

     <Switch>
       <Route path='/' component={Department} exact/>
       <Route path='/admin' component={Home}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
