import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import "./time.css";

export default function Time() {
  const { idFilme } = useParams();
  const [dates, setDates] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`
      )
      .then((response) => {
        setDates(response.data);
      });
  }, []);

  console.log(dates);

  if (dates == null) {
    return <>Carregando...</>;
  }

  return (
    <>
      <Header />
      <div className="timeTitle">
        <h2>Selecione o horário</h2>
      </div>

      {dates.days.map((date) => (
        <div key={date.id} className="dateContainer">
          <p>
            {date.weekday} - {date.date}
          </p>
          <div>
            {date.showtimes.map((showtime) => (
              <Link
                teste={"teste"}
                key={showtime.id}
                to={`/assentos/${showtime.id}`}
              >
                <button>{showtime.name}</button>
              </Link>
            ))}
          </div>
        </div>
      ))}

      <Footer title={dates.title} posterURL={dates.posterURL} />
    </>
  );
}
