import "../styles/components/Map.scss";

function Map() {
  return (
    <div className="Map">
      <img
        className="map-img"
        src={`${process.env.PUBLIC_URL}/images/map-example.png`}
        alt="map"
        draggable={false}
      />
    </div>
  );
}

export default Map;
