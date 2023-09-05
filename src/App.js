import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import MyTest from "./components/Testing/MyTest";
import WebCards from "./components/WebCards/WebCards";
import Home from "./containers/HomePage/Home";
import TestWebCards from "./components/Testing/TestWebCard";
import NavBar1 from "./components/NavBar/NavBar";

function App(){
  return ( 
    <div>
      <NavBar1 />
      <WebCards />
    </div>
    // <MyTest />
   );
}
 
export default App;
