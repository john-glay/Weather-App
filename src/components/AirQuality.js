import "../styles/components/AirQuality.scss";

function AirQuality({ data }) {
  const { aqi } = data.list[0].main;
  const { pm2_5, so2, no2, o3 } = data.list[0].components;

  const airQuality = {
    1: "good",
    2: "fair",
    3: "moderate",
    4: "poor",
    5: "very-poor",
  };

  const airPollutans = [
    {
      id: 0,
      name: "PM2.5",
      value: pm2_5,
    },
    {
      id: 1,
      name: "SO2",
      value: so2,
    },
    {
      id: 2,
      name: "NO2",
      value: no2,
    },
    {
      id: 3,
      name: "O3",
      value: o3,
    },
  ];

  return (
    <div className="AirQuality">
      <div className="air-header">
        <p className="air-title">Air Quality Index</p>
        <p className={`air-index ${airQuality[aqi]}`}>
          {airQuality[aqi]
            .replace("-", " ")
            .replace(/\b\w/g, (c) => c.toUpperCase())}
        </p>
      </div>
      <div className="air-pollutants">
        {airPollutans.map(({ id, name, value }) => (
          <div className="pollutant" key={id}>
            <p>
              {value.toFixed(2)}
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
