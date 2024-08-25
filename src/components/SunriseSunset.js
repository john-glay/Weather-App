import "../styles/components/SunriseSunset.scss";

const sunRiseSet = [
  {
    id: 0,
    name: "Sunrise",
    icon: "sunrise",
    time: "00:00",
    abbreviation: "AM",
  },
  {
    id: 1,
    name: "Sunset",
    icon: "sunset",
    time: "00:00",
    abbreviation: "PM",
  },
];

function SunriseSunset() {
  return (
    <div className="SunriseSunset">
      {sunRiseSet.map(({ id, name, icon, time, abbreviation }) => (
        <div className="sun" key={id}>
          <i className={`bi bi-${icon}`}></i>
          <p>
            <span className="sun-name">{name}</span>
            <br />
            {time} <span className="sun-abv">{abbreviation}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default SunriseSunset;
