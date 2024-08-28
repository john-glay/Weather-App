import "../styles/components/SunriseSunset.scss";

function SunriseSunset({ data }) {
  const convertTime = (timestamp) => {
    // Convert timestamp to milliseconds
    const date = new Date(timestamp * 1000);

    const optionsTime = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    // Format the time string and remove AM/PM
    const formattedTime = date
      .toLocaleTimeString("en-US", optionsTime)
      .replace(/[\s]*(AM|PM)/, "");

    return formattedTime;
  };

  const sunriseTime = convertTime(data.sys.sunrise);
  const sunsetTime = convertTime(data.sys.sunset);

  const sunRiseSet = [
    {
      id: 0,
      name: "Sunrise",
      icon: "sunrise",
      time: sunriseTime,
      abbreviation: "AM",
    },
    {
      id: 1,
      name: "Sunset",
      icon: "sunset",
      time: sunsetTime,
      abbreviation: "PM",
    },
  ];

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
