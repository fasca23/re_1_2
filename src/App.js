import './App.css';
import ShopItemFunc from './components/ShopItemClass';
import item from './item.js'

function App() {
  return (
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemFunc item={item}/>
      </div>
    </div>
  );
}

export default App;
