import "../styles/components/Widgets.scss";

const infoWidgets = [
  {
    id: 0,
    icon: "eye",
    name: "Visibility",
    value: "00",
    unit: "km",
  },
  {
    id: 1,
    icon: "droplet",
    name: "Rain",
    value: "0.0",
    unit: "mm",
  },
  {
    id: 2,
    icon: "moisture",
    name: "Humidity",
    value: "00",
    unit: "%",
  },
  {
    id: 3,
    icon: "wind",
    name: "Wind",
    value: "00",
    unit: "mph",
  },
];

function Widgets() {
  return (
    <>
      {infoWidgets.map(({ id, icon, name, value, unit }) => (
        <div className="Widgets" key={id}>
          <div className="widget">
            <i class={`bi bi-${icon}`}></i>
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
