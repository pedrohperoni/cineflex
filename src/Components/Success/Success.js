import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./success.css";
export default function Success({ title }) {
  return (
    <>
      <Header />
      <div className="successTitle">
        <h2>Pedido feito com sucesso!</h2>
      </div>
      <div className="successInfo">
        <h2>Filme e sessão</h2>
        <p>{title}</p>
        <p>24/06/2021 15:00</p>
      </div>
      <div className="successInfo">
        <h2>Ingressos</h2>
        <p>Assento 15</p>
        <p>Assento 16</p>
      </div>
      <div className="successInfo">
        <h2>Comprador</h2>
        <p>Nome: Joao da Silva</p>
        <p>CPF: 123.456.789.10</p>
      </div>
      <Link to="/">
        <div className="successBtn">
          <button>Voltar para Home</button>
        </div>
      </Link>
    </>
  );
}
