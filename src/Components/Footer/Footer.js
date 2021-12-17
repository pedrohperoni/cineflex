import "./footer.css";

export default function Footer({ title, posterURL }) {
  return (
    <div className="footer">
      <div className="footerImg">
        <img src={posterURL} alt="movie" />
      </div>
      <div>
        <p>{title}</p>
        <p>Quinta-Feira - 15:00</p>
      </div>
    </div>
  );
}
