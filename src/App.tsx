import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './core/Footer';
import Header from './core/Header';
import FlowerPage from './flowers/FlowerPage';

import './App.css';

function App() {
  return (
    <Router>
      <Header></Header>

      <main>
        <Switch>
          <Route path="/check-out" component={() => <div>Hello</div>}></Route>
          <Route path="/" component={FlowerPage}></Route>
        </Switch>
      </main>

      <Footer></Footer>
    </Router>
  );
}

export default App;
