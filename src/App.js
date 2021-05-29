import './App.css';
import SearchEngine from './SearchEngine';
import Footer from './Footer.js';
import Header from './Header.js';

function App() {
  return (
    <div className="App">
      <h1 className="text-center pt-5 pb-5">{''}</h1>
      <div className="container">
        <header className="App-header">
          <Header />
        </header>
        <SearchEngine />
      </div>
      <footer className="text-center">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
