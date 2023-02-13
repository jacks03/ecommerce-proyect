import './App.css';
import Header from './common/header/Header';
import{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Pages from './pages/Pages';
import Data from './components/Data';
import { useState } from 'react';


function App() {
  // step 1: fetch data from database
  const {productItems}= Data

  const [CartItem, setCartItem] = useState([])

  const addtoCart = (product) =>{
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    }
  }
  return (
   <>
      <Router>
        <Header/>
        <Switch>
          <Route path='/' exact>
          <Pages productItems={productItems} addtoCart={addtoCart} />
          </Route>
          <Route path='/cart'>
            
          </Route>
        </Switch>
      </Router>
   </>
  );
}

export default App;
