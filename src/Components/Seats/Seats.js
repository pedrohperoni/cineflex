import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./seats.css";

export default function Seats() {
  const { idSessao } = useParams();
  const [movie, setMovie] = useState();
  const [footerInfo, setFooterInfo] = useState();
  const [objectCreation, setObjectCreation] = useState(false);
  const [userCPF, setUserCPF] = useState();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`
      )
      .then((response) => {
        setFooterInfo(response.data);
        setMovie(response.data.seats);
      });
  }, []);

  console.log("aaaaaaaaaaaa", useParams());

  console.log("ORIGINAL", movie);
  console.log(userName, userCPF);

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
    } else if (movie[seatId - 1].selected === true) {
      movie[seatId - 1].selected = false;
      console.log("toggle", movie);
      setMovie(newSeatsArray);
    } else {
      movie[seatId - 1].selected = true;
      console.log("RESULTADOTRUE", movie);
      setMovie(newSeatsArray);
    }
  };

  function handleSuccess() {
    alert("aea");
  }

  if (movie === undefined) {
    return <>Loading...</>;
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
            onClick={() =>
              seat.isAvailable
                ? selectSeat(seat.name)
                : alert("Esse assento não está disponível")
            }
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
        <input
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Digite seu nome..."
        ></input>
        <p>CPF do comprador:</p>
        <input
          onChange={(e) => setUserCPF(e.target.value)}
          placeholder="Digite seu CPF..."
          type="text"
          pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
        ></input>
      </div>
      <Link to="/sucesso" title={footerInfo.movie.title}>
        <div className="seatsBtn">
          <button onClick={() => handleSuccess()} className="seatsBtn">
            Reservar assento(s)
          </button>
        </div>
      </Link>
      <Footer
        title={footerInfo.movie.title}
        posterURL={footerInfo.movie.posterURL}
        day={footerInfo.day.date}
        time={footerInfo.name}
      />
    </>
  );
}
