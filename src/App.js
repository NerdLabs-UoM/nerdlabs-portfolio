import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './containers/HomePage/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <body className="App-body">
        <Home/>
      </body>
    </div>
  );
}

export default App;
