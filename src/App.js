import './App.css';
import Header from './common/header/Header';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
   <>
      <Router>
        <Header/>
        <Switch>
          <Route path='/' exact>
          </Route>
          <Route path='/cart'>
          </Route>
        </Switch>
      </Router>
   </>
  );
}

export default App;
