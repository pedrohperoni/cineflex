import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./seats.css";

export default function Seats() {
  const { idSessao } = useParams();
  const [movie, setMovie] = useState();
  const [objectCreation, setObjectCreation] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`
      )
      .then((response) => {
        setMovie(response.data.seats);
      });
  }, []);

  console.log("ORIGINAL", movie);

  const selectSeat = (seatId) => {
    const newSeatsArray = [...movie];
    if (!objectCreation) {
      newSeatsArray.forEach(function (x) {
        x.selected = false;
      });
      movie[seatId - 1].selected = true;
      setObjectCreation(true);
      setMovie(newSeatsArray);
      console.log("RESULTADO", movie);
    } else {
      movie[seatId - 1].selected = true;
      console.log("RESULTADOTRUE", movie);
      setMovie(newSeatsArray);
    }
  };

  if (movie === undefined) {
    return <>Carregando...</>;
  }

  return (
    <>
      <Header />
      <div className="seatsTitle">
        <h2>Selecione o(s) assento(s)</h2>
      </div>
      <div className="seatsContainer">
        {movie.map((seat) => (
          <button
            key={seat.id}
            className={
              seat.isAvailable
                ? seat.selected
                  ? "seat selected"
                  : "seat"
                : "seat unavailable"
            }
            onClick={() => selectSeat(seat.name)}
          >
            {seat.name}
          </button>
        ))}
      </div>
      <div className="seatsSubtitle">
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
      <Footer
      //   title={movie.movie.title}
      //   posterURL={movie.movie.posterURL}
      //   day={movie.day.date}
      //   time={movie.name}
      />
    </>
  );
}
