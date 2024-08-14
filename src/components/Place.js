import "../styles/components/Place.scss";

function Place() {
  return (
    <div className="Place">
      <i className="bi bi-geo-alt-fill"></i>
      <div className="location">
        <p className="city">Manila,&nbsp;</p>
        <p className="country">Philippines</p>
      </div>
    </div>
  );
}

export default Place;
