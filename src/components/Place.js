import "../styles/components/Place.scss";

function Place() {
  return (
    <div className="Place">
      <i className="bi bi-geo-alt-fill"></i>
      <div className="location">
        <p className="city">Manila,&nbsp;</p>
        <p className="country">Philippines</p>
        <p className="place-date">
          <span>•</span>00 Mon, Day
        </p>
      </div>
    </div>
  );
}

export default Place;
