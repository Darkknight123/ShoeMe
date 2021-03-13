
import './App.css';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import Contact from './Contact/Contact';




function App() {
  return (
    <div className="App">
     <Header/>
     {/* Main screen renders && Should use router */}
     <Landing/>
     {/*Footer components */}
     <Contact/>
   
    </div>
  );
}

export default App;
