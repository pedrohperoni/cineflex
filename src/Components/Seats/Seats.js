import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./seats.css";

export default function Seats() {
  return (
    <>
      <Header />
      <div className="seatsTitle">
        <h2>Selecione o(s) assento(s)</h2>
      </div>
      <div className="seatsContainer">
        <button className="seat">01</button>
        <button className="seat unavailable">02</button>
        <button className="seat selected">11</button>
        <button className="seat">50</button>
        <button className="seat">24</button>
        <button className="seat">42</button>
        <button className="seat">01</button>
        <button className="seat">01</button>
        <button className="seat">01</button>
        <button className="seat">01</button>
        <button className="seat">01</button>
        <button className="seat">01</button>
        <button className="seat">01</button>
        <button className="seat">01</button>
        <button className="seat">01</button>
      </div>
      <div className="seatsLegend">
        <div>
          <button className="seat selected"></button>
          <p>Selecionado</p>
        </div>
        <div>
          <button className="seat"></button>
          <p>Disponível</p>
        </div>
        <div>
          <button className="seat unavailable"></button>
          <p>Indisponível</p>
        </div>
      </div>
      <div className="seatsInputContainer">
        <p>Nome do comprador:</p>
        <input placeholder="Digite seu nome..."></input>
        <p>CPF do comprador:</p>
        <input placeholder="Digite seu CPF..."></input>
      </div>
      <Link to="/sucesso">
        <div className="seatsBtn">
          <button className="seatsBtn">Reservar assento(s)</button>
        </div>
      </Link>
      <Footer />
    </>
  );
}
