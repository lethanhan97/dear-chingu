import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Footer from './core/components/Footer';
import Header from './core/components/Header';
import FlowerPage from './flowers/FlowerPage';
import CheckOutPage from './check-out/CheckOutPage';

function App() {
  return (
    <Router>
      <Header></Header>

      <main>
        <Switch>
          <Route path="/check-out" component={CheckOutPage}></Route>
          <Route path="/" component={FlowerPage}></Route>
        </Switch>
      </main>

      <Footer></Footer>
    </Router>
  );
}

export default App;
