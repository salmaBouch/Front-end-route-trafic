import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Routes, Switch } from 'react-router-dom';
import Sign from "./Components/Sign";
import Home from './Components/Home';
import Map from "./Components/Map"

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
<Route path="" element={<Home />} />
<Route path="Sign" element={<Sign/>} />
<Route path="Map" element={<Map/>} />
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
