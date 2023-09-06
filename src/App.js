import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import MyTest from "./components/Testing/MyTest";
import WebCards from "./components/WebCards/WebCards";
import Home from "./containers/HomePage/Home";
import TestWebCards from "./components/Testing/TestWebCard";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <Home />
      <NavBar />
      <WebCards />
    </div>
  );
}

export default App;
