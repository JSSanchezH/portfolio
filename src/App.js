// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './components/Pages/Home';
import {AboutMe} from './components/Pages/AboutMe';
import {Portfolio} from './components/Pages/Portfolio';
import {Contact} from './components/Pages/Contact';
import {Footer} from './components/Pages/Footer';
import Nav from './components/Navbar/Navbar';
import './App.css'


function App() {
  return(
    <>
     {/* <Router>

          <Switch>
            <Route exact path="/portfolio/" component={Home}/>
            <Route path="/portfolio/About-me" component={AboutMe}/>
            <Route path="/portfolio/Projects" component={Portfolio}/>
            <Route path="/portfolio/Contact" component={Contact}/>
            <Route path="/portfolio/cv" component={CV}/>
          </Switch>
        

      </Router>  */}

      <Nav/>  
      <div id="wrapper">
        <Home/>
        <AboutMe/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App;