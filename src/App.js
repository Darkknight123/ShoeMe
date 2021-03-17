
import './App.css';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import { Router } from '@reach/router'
import Cart from './Cart/Cart';
import User from './User/User';





function App() {
  return (
    <div className="App">
      <Header />
      {/* Main screen renders && Should use router */}
      <Router>
        <Landing path="/" />
        <Cart path="/cart"/>
        <User path="/user"/>
      </Router>
      {/*Footer components */}

    </div>
  );
}

export default App;
