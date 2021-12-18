import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Seats from "./Components/Seats/Seats";
import Success from "./Components/Success/Success";
import Sessions from "./Components/Sessions/Sessions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessoes/:idFilme" element={<Sessions />} />
        <Route path="/assentos/:idSessao" element={<Seats />} />
        <Route path="/sucesso" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
