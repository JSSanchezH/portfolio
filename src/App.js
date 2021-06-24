import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './components/Pages/Home';
import {AboutMe} from './components/Pages/About me';
import {Portfolio} from './components/Pages/Portfolio';
import {Contact} from './components/Pages/Contact';
import CV from './components/Pages/CV';
import './App.css'
import Nav from './components/Navbar/Navbar';

function App() {
  return(
    <>
      <Router>
        <Nav/>  
        <div className="pages">
          <Switch>
            <Route exact path="/portfolio/" component={Home}/>
            <Route path="/portfolio/About-me" component={AboutMe}/>
            <Route path="/portfolio/Projects" component={Portfolio}/>
            <Route path="/portfolio/Contact" component={Contact}/>
            <Route path="/portfolio/cv" component={CV}/>
          </Switch>
        </div>

      </Router>
    </>
  )
}

export default App;