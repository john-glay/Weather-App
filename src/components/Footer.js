import "../styles/components/Footer.scss";

function Footer() {
  return (
    <div className="Footer">
      <div className="credits">
        Powered by
        <a href="https://openweathermap.org/" target="blank">
          &nbsp;&nbsp;
          <img
            className=""
            src={`${process.env.PUBLIC_URL}/images/open-weather.png`}
            alt="open-weather"
            draggable="false"
          />
          &nbsp;&nbsp;OpenWeather&nbsp;
        </a>
        and
        <a href="https://www.maptiler.com/" target="blank">
          &nbsp;&nbsp;
          <img
            src={`${process.env.PUBLIC_URL}/images/maptiler.png`}
            alt="maptiler"
            draggable="false"
          />
          &nbsp;&nbsp;MapTiler
        </a>
      </div>
      <div className="socials">
        <p className="name">John Glay.</p>
        <a href="https://github.com/john-glay" target="blank">
          <i class="bi bi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/john-glay-bunao-8b5948255/"
          target="blank"
        >
          <i class="bi bi-linkedin"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
