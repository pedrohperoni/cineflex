import Header from "../Header/Header";

import "./time.css";

export default function Time() {
  return (
    <>
      <Header />
      <div className="timeTitle">
        <h2>Selecione o horário</h2>
      </div>

      <div className="dateContainer">
        <p>Quinta-feira - 24/06/2021</p>
        <div>
          <button>15:00</button>
          <button>15:00</button>
        </div>
      </div>
      <div className="dateContainer">
        <p>Quinta-feira - 24/06/2021</p>
        <div>
          <button>15:00</button>
          <button>15:00</button>
        </div>
      </div>
    </>
  );
}
