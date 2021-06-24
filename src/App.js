import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './components/Pages/Home';
import {Contact} from './components/Pages/Contact';
import {Portfolio} from './components/Pages/Portfolio';
import './App.css'
import Nav from './components/Navbar/Navbar';

function App() {
  return(
    <>
      <Router>
        <Nav/>  
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/portfolio" component={Portfolio}/>
          </Switch>
        </div>

      </Router>
    </>
  )
}

export default App;