import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./home.css";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("https://mock-api.driven.com.br/api/v4/cineflex/movies")
      .then((response) => {
        setMovies(response.data);
      });
  }, []);
  console.log(movies);

  return (
    <div>
      <Header />
      <div className="homeTitle">
        <h2>Selecione o Filme</h2>
      </div>
      <div className="moviesDisplay">
        {movies.map((movie) => (
          <Link to={`sessoes/${movie.id}`}>
            <div key={movie.id} className="movieBox">
              <img className="movie" src={movie.posterURL} alt="movie" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
