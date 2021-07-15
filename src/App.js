// import logo from './logo.svg';
import './App.css';
import { Header } from './components/global/Header';
import { Footer } from './components/global/Footer';
import { Home } from './components/main-content/Home';
// import { Redirect, Route, Switch } from "react-router-dom";
import { Route, Switch } from "react-router-loading";
import { About } from './components/main-content/About';
import { Services } from './components/main-content/Services';
import { Contact } from './components/main-content/Contact';
import { Testimonial } from './components/main-content/Testimonial';
import { ProjectGallery } from './components/main-content/ProjectGallery';

function App() {

  return (
    <div className="App">
      
      <Header/>
      <Switch maxLoadingTime={500}>
      <Route exact path="/" component={Home} loading />
      <Route exact path="/about-us" component={About} loading />
      <Route exact path="/services" component={Services} loading />
      <Route exact path="/contact" component={Contact} loading />
      <Route exact path="/testimonial" component={Testimonial} loading />
      <Route exact path="/project-gallery" component={ProjectGallery} loading />
      {/* <Redirect to="/" /> */}
      </Switch>
      <Footer/>

    </div>
  );
}

export default App;
