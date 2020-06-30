import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './css/profile.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all.min.js';
import Header from './components/header';
import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import MercadoGeral from './pages/grand-exchange/mercado-geral';
import Footer from './components/footer';

const App: React.FC = () => {
  return (
      <Router>
        <Header />
          <main className="page-wrap">
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/profile" component={Profile} />
              <Route path="/grand-exchange" component={MercadoGeral} />
              <Route path="/" component={Home} />
            </Switch>
          </main>   
        <Footer />
      </Router>
  )
}

export default App;
