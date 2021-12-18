import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./seats.css";

export default function Seats() {
  const { idSessao } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState();
  const [footerInfo, setFooterInfo] = useState();
  const [objectCreation, setObjectCreation] = useState(false);

  const [userCPF, setUserCPF] = useState("");
  const [userName, setUserName] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);

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

  console.log(userCPF, userName, selectedSeats);

  const selectSeat = (seatNumber, seatId) => {
    const newSeatsArray = [...movie];
    if (!objectCreation) {
      newSeatsArray.forEach(function (x) {
        x.selected = false;
      });
      movie[seatNumber - 1].selected = true;
      setSelectedSeats([seatId]);
      setObjectCreation(true);
      setMovie(newSeatsArray);
    } else if (movie[seatNumber - 1].selected === true) {
      movie[seatNumber - 1].selected = false;
      setMovie(newSeatsArray);

      let seatsArray = [...selectedSeats];
      let filterSeatsArray = seatsArray.filter((seat) => {
        return seat !== seatId;
      });
      setSelectedSeats(filterSeatsArray);
    } else {
      movie[seatNumber - 1].selected = true;
      setSelectedSeats([...selectedSeats, seatId]);
      setMovie(newSeatsArray);
    }
  };

  function handleSubmit() {
    axios
      .post("https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many", {
        ids: selectedSeats,
        name: userName,
        cpf: userCPF,
      })
      .then((response) => {
        navigate("/sucesso");
      });
  }

  if (movie === undefined) {
    return (
      <>
        <Header />
        <div className="seatsTitle">
          <h2>Selecione o(s) assento(s)</h2>
        </div>
      </>
    );
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
                ? selectSeat(seat.name, seat.id)
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
      <div
        className={
          userCPF === "" || userName === "" || selectedSeats.length === 0
            ? "seatsBtn disabled"
            : "seatsBtn"
        }
      >
        <button onClick={() => handleSubmit()} className="seatsBtn">
          Reservar assento(s)
        </button>
      </div>
      <Footer
        title={footerInfo.movie.title}
        posterURL={footerInfo.movie.posterURL}
        day={footerInfo.day.date}
        time={footerInfo.name}
      />
    </>
  );
}
