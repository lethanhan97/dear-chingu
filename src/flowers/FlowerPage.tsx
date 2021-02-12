import FlowerItem from './FlowerItem';
import data from '../data/data.json';

import './flower-page.css';

function FlowerPage() {
  return (
    <section className="flower-page-wrapper">
      {data.map((item) => (
        <FlowerItem details={item}></FlowerItem>
      ))}
    </section>
  );
}

export default FlowerPage;
