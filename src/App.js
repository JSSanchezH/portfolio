import {Home} from './components/Pages/Home';
import {AboutMe} from './components/Pages/AboutMe';
import {Portfolio} from './components/Pages/Portfolio';
import {Contact} from './components/Pages/Contact';
import {Footer} from './components/Pages/Footer';
import {Nav} from './components/Navbar/Navbar';
import { LanguageProvider } from './containers/Language';
import './App.css'


export const App = () =>(
    <LanguageProvider>
      <Nav/>  
      <div id="wrapper">
        <Home/>
        <AboutMe/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </div>
    </LanguageProvider>
  )

