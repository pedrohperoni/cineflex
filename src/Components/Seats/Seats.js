import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./seats.css";
import Loader from "../Loader/Loader";

export default function Seats() {
  const { idSessao } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState();
  const [movieInfo, setMovieInfo] = useState();
  const [objectCreation, setObjectCreation] = useState(false);

  const [userCPF, setUserCPF] = useState("");
  const [userName, setUserName] = useState("");
  const [selectedSeatsId, setSelectedSeatsId] = useState([]);
  const [selectedSeatsNumber, setSelectedSeatsNumber] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`
      )
      .then((response) => {
        setMovieInfo(response.data);
        setMovie(response.data.seats);
      });
  }, []);

  const selectSeat = (seatNumber, seatId) => {
    const newSeatsArray = [...movie];
    if (!objectCreation) {
      newSeatsArray.forEach((seat) => {
        seat.selected = false;
      });
      movie[seatNumber - 1].selected = true;
      setSelectedSeatsId([seatId]);
      setSelectedSeatsNumber([seatNumber]);
      setObjectCreation(true);
      setMovie(newSeatsArray);
    } else if (movie[seatNumber - 1].selected === true) {
      movie[seatNumber - 1].selected = false;
      setMovie(newSeatsArray);

      let seatsArrayId = [...selectedSeatsId];
      let filterSeatsIdArray = seatsArrayId.filter((seat) => {
        return seat !== seatId;
      });
      setSelectedSeatsId(filterSeatsIdArray);

      let seatsNumberArray = [...selectedSeatsNumber];
      let filterSeatsNumberArray = seatsNumberArray.filter((seat) => {
        return seat !== seatNumber;
      });
      setSelectedSeatsNumber(filterSeatsNumberArray);
    } else {
      movie[seatNumber - 1].selected = true;
      setSelectedSeatsId([...selectedSeatsId, seatId]);
      setSelectedSeatsNumber([...selectedSeatsNumber, seatNumber]);
      setMovie(newSeatsArray);
    }
  };

  function handleSubmit() {
    axios
      .post("https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many", {
        ids: selectedSeatsId,
        name: userName,
        cpf: userCPF,
      })
      .then((response) => {
        navigate("/sucesso", {
          state: {
            movie: movieInfo.movie.title,
            date: movieInfo.day.date,
            time: movieInfo.name,
            seats: selectedSeatsNumber,
            name: userName,
            cpf: userCPF,
          },
        });
      });
  }

  if (movie === undefined) {
    return (
      <>
        <Loader />
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
          userCPF === "" || userName === "" || selectedSeatsId.length === 0
            ? "seatsBtn disabled"
            : "seatsBtn"
        }
      >
        <button onClick={() => handleSubmit()} className="seatsBtn">
          Reservar assento(s)
        </button>
      </div>
      <Footer
        title={movieInfo.movie.title}
        posterURL={movieInfo.movie.posterURL}
        day={movieInfo.day.date}
        time={movieInfo.name}
      />
    </>
  );
}
