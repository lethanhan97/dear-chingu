import Footer from './core/Footer';
import Header from './core/Header';
import FlowerPage from './flowers/FlowerPage';

import './App.css';

function App() {
  return (
    <>
      <Header></Header>

      <main>
        <FlowerPage></FlowerPage>
      </main>

      <Footer></Footer>
    </>
  );
}

export default App;
