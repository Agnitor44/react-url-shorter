import Nav from './components/Nav'
import Header from './components/Header'
import Panel from './components/Panel'
import LowerHeader from './components/LowerHeader';
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Panel/>
      <LowerHeader/>
      <Footer/>
    </div>
  );
}

export default App;
