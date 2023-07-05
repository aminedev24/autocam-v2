//import './App.css';
import TopBar from './topBar';
import Header from './header';
import Navigation from './nav';
import Hero from './hero';
import DealsSection from './deals';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar />
        <Header />
        <Navigation />
        <Hero />
        <DealsSection />
      </header>
    </div>
  );
}

export default App;
