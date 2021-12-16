import Header from "../Header/Header";
import "./home.css";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="homeTitle">
        <h2>Selecione o Filme</h2>
      </div>
      <div className="moviesDisplay">
        <div className="movieBox">
          <img
            className="movie"
            src="https://images.unsplash.com/photo-1639580831803-692ef0b4f6aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            alt="movie"
          />
        </div>
        <div className="movieBox">
          <img
            className="movie"
            src="https://images.unsplash.com/photo-1639580831803-692ef0b4f6aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            alt="movie"
          />
        </div>
        <div className="movieBox">
          <img
            className="movie"
            src="https://images.unsplash.com/photo-1639580831803-692ef0b4f6aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            alt="movie"
          />
        </div>
        <div className="movieBox">
          <img
            className="movie"
            src="https://images.unsplash.com/photo-1639580831803-692ef0b4f6aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            alt="movie"
          />
        </div>
        <div className="movieBox">
          <img
            className="movie"
            src="https://images.unsplash.com/photo-1639580831803-692ef0b4f6aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            alt="movie"
          />
        </div>
      </div>
    </div>
  );
}
