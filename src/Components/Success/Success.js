import { Link, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import "./success.css";
export default function Success() {
  const { state } = useLocation();

  if (state === null) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <>
      <Header />
      <div className="successTitle">
        <h2>Pedido feito com sucesso!</h2>
      </div>
      <div className="successInfo">
        <h2>Filme e sessão</h2>
        <p>{state.movie}</p>
        <p>
          {state.date} {state.time}
        </p>
      </div>
      <div className="successInfo">
        <h2>Ingressos</h2>
        {state.seats.map((seat) => (
          <p>Assento {seat}</p>
        ))}
      </div>
      <div className="successInfo">
        <h2>Comprador</h2>
        <p>{state.name}</p>
        <p>CPF: {state.cpf}</p>
      </div>
      <Link to="/">
        <div className="successBtn">
          <button>Voltar para Home</button>
        </div>
      </Link>
    </>
  );
}
