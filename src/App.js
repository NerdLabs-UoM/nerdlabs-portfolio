import './App.css';
import ContactUs from './components/ContactUs/ContactUs';
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
        <ContactUs/>
      </body>
    </div>
  );
}

export default App;
