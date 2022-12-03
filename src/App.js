import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import Recette from "./pages/Recette";
import MesRecettes from "./pages/MesRecettes";
import Recettes from "./pages/Recettes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/connexion" element={<Connexion />}></Route>
          <Route path="/recettes" element={<Recettes />}></Route>
          <Route path="/recette/*" element={<Recette />}></Route>
          <Route path="/mesrecettes" element={<MesRecettes />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
