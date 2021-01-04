
import { Switch,Router,Route } from 'react-router-dom';
import './grid.css'
import './App.css'

import history from './history'
import Grid from './pages/grid';
import Puro from './pages/puro';
import Flex from './pages/flex';


function App() {
  return (
    <Router history={history} >

        <Switch>
        <Route exact path="/"  render={() => <Puro></Puro>}></Route>
        <Route exact path="/home"  render={() => <Puro></Puro>}></Route>
        <Route exact path="/purohome"  render={() => <Puro></Puro>}></Route>
        <Route exact path="/gridhome"  render={() => <Grid></Grid>}></Route>
        <Route exact path="/flexhome"  render={() => <Flex></Flex>}></Route>
     
        </Switch>

    </Router>
  );
}

export default App;
