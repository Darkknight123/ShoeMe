
import './App.css';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import Contact from './Contact';




function App() {
  return (
    <div className="App">
     <Header/>
     {/* Main screen renders && Should use router */}
     <Landing/>
     {/*Footer components */}
     <Contact name=""/>
   
    </div>
  );
}

export default App;
