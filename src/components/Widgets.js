import "../styles/components/Widgets.scss";

function Widgets({ data, units }) {
  const humidity = data.main.humidity;
  const wind = data.wind.speed.toFixed(1);
  const visibility = (data.visibility / 1000).toFixed(1);
  const clouds = data.clouds.all;

  const infoWidgets = [
    {
      id: 0,
      icon: "moisture",
      name: "Humidity",
      value: humidity,
      unit: "%",
    },
    {
      id: 1,
      icon: "wind",
      name: "Wind",
      value: wind,
      unit: units.wind_speed, // Metric: m/s, Imperial: m/h, Standard: m/s
    },
    {
      id: 2,
      icon: "eye",
      name: "Visibility",
      value: visibility,
      unit: "km",
    },
    {
      id: 3,
      icon: "clouds",
      name: "Clouds",
      value: clouds,
      unit: "%",
    },
  ];

  return (
    <>
      {infoWidgets.map(({ id, icon, name, value, unit }) => (
        <div className="Widgets" key={id}>
          <div className="widget">
            <i className={`bi bi-${icon}`}></i>
            <p>
              <span className="widget-name">{name}</span>
              <br />
              {value} <span className="widget-unit">{unit}</span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Widgets;
