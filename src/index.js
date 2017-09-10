import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Switch } from 'react-router'
import { About, Projects, Contact, Home, Pricing } from './pages'
import Header from './components/Header'
import Footer from './components/Footer'

const Routes = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/pricing" component={Pricing}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
