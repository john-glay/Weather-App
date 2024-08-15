import "../styles/components/AirQuality.scss";

const airPollutans = [
  {
    id: 0,
    name: "PM2.5",
    value: "0.00",
  },
  {
    id: 1,
    name: "SO2",
    value: "0.00",
  },
  {
    id: 2,
    name: "NO3",
    value: "0.00",
  },
  {
    id: 3,
    name: "O3",
    value: "00.00",
  },
];

function AirQuality() {
  return (
    <div className="AirQuality">
      <div className="air-header">
        <p className="air-title">Air Quality Index</p>
        <p className="air-index">Good</p>
      </div>
      <div className="air-pollutants">
        {airPollutans.map(({ id, name, value }) => (
          <div className="pollutant" key={id}>
            <p>
              {value}
              <br />
              <span>{name}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AirQuality;
