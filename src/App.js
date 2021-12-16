import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Seats from "./Components/Seats/Seats";
import Success from "./Components/Success/Success";
import Time from "./Components/Time/Time";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessoes/:id" element={<Time />} />
        <Route path="/assentos" element={<Seats />} />
        <Route path="/sucesso" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
