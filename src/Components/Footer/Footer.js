import "./footer.css";

export default function Footer({ title, posterURL, time, day }) {
  return (
    <div className="footer">
      <div className="footerImg">
        <img src={posterURL} alt="movie" />
      </div>
      <div>
        <p>{title}</p>
        <p>
          {day}
          {time ? " -" : " "} {time}
        </p>
      </div>
    </div>
  );
}
