function WeatherIcon({ icon }) {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/images/weather-icons/${icon}.png`}
      alt="{description}"
      draggable={false}
    />
  );
}

export default WeatherIcon;
