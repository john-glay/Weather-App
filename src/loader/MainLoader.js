import Skeleton from "react-loading-skeleton";
import "../styles/loader/MainLoader.scss";

function MainLoader() {
  return (
    <>
      {/* Highlights */}
      <div className="HighlightsLoader">
        <h1 className="title">Today's Highlights</h1>
        <div className="highlights-info">
          {/* SunriseSunset Component */}
          <div className="SunriseSunset">
            <div className="sun">
              <i className="bi bi-sunrise"></i>
              <p>
                <span className="sun-name">Sunrise</span>
                <br />
                <Skeleton className="sunrise" />
              </p>
            </div>
            <div className="sun">
              <i className="bi bi-sunset"></i>
              <p>
                <span className="sun-name">Sunset</span>
                <br />
                <Skeleton className="sunset" />
              </p>
            </div>
          </div>

          {/* AirQuality Component */}
          <div className="AirQuality">
            <div className="air-header">
              <p className="air-title">Air Quality Index</p>
              <Skeleton className="air-index" />
            </div>
            <div className="air-pollutants">
              <div className="pollutant">
                <Skeleton className="value" />
                <span className="span">PM2.5</span>
              </div>
              <div className="pollutant">
                <Skeleton className="value" />
                <span className="span">SO2</span>
              </div>
              <div className="pollutant">
                <Skeleton className="value" />
                <span className="span">NO2</span>
              </div>
              <div className="pollutant">
                <Skeleton className="value" />
                <span className="span">O3</span>
              </div>
            </div>
          </div>

          {/* Map Component */}
          <div className="Map">
            <Skeleton className="render-map" />
          </div>

          {/* Widgets Component */}
          <div className="Widgets">
            <div className="widget">
              <i className="bi bi-moisture"></i>
              <p>
                <span className="widget-name">Humidity</span>
                <br />
                <Skeleton className="value" />
              </p>
            </div>
          </div>
          <div className="Widgets">
            <div className="widget">
              <i className="bi bi-wind"></i>
              <p>
                <span className="widget-name">Wind</span>
                <br />
                <Skeleton className="value" />
              </p>
            </div>
          </div>
          <div className="Widgets">
            <div className="widget">
              <i className="bi bi-eye"></i>
              <p>
                <span className="widget-name">Visibility</span>
                <br />
                <Skeleton className="value" />
              </p>
            </div>
          </div>
          <div className="Widgets">
            <div className="widget">
              <i className="bi bi-clouds"></i>
              <p>
                <span className="widget-name">Clouds</span>
                <br />
                <Skeleton className="value" />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hourly Forecast */}
      <div className="HourlyForecastLoader">
        <h1 className="title">3-Hour Forecast</h1>
        <div className="hourly-info">
          <div className="Hourly">
            <Skeleton className="time" />
            <Skeleton className="img" />
            <Skeleton className="hourly-temp" />
          </div>
          <div className="Hourly">
            <Skeleton className="time" />
            <Skeleton className="img" />
            <Skeleton className="hourly-temp" />
          </div>
          <div className="Hourly">
            <Skeleton className="time" />
            <Skeleton className="img" />
            <Skeleton className="hourly-temp" />
          </div>
          <div className="Hourly">
            <Skeleton className="time" />
            <Skeleton className="img" />
            <Skeleton className="hourly-temp" />
          </div>
          <div className="Hourly">
            <Skeleton className="time" />
            <Skeleton className="img" />
            <Skeleton className="hourly-temp" />
          </div>
          <div className="Hourly">
            <Skeleton className="time" />
            <Skeleton className="img" />
            <Skeleton className="hourly-temp" />
          </div>
          <div className="Hourly">
            <Skeleton className="time" />
            <Skeleton className="img" />
            <Skeleton className="hourly-temp" />
          </div>
        </div>
      </div>

      {/* Daily Forecast */}
      <div className="DailyForecastLoader">
        <h1 className="title">5-Day Forecast</h1>
        <div className="daily-info">
          <div className="Daily">
            <div className="daily-weather">
              <Skeleton className="img" />
              <div className="daily-temp">
                <Skeleton className="temp" />
                <Skeleton className="temp" />
              </div>
            </div>
            <div className="daily-date">
              <Skeleton />
            </div>
          </div>
          <div className="Daily">
            <div className="daily-weather">
              <Skeleton className="img" />
              <div className="daily-temp">
                <Skeleton className="temp" />
                <Skeleton className="temp" />
              </div>
            </div>
            <div className="daily-date">
              <Skeleton />
            </div>
          </div>
          <div className="Daily">
            <div className="daily-weather">
              <Skeleton className="img" />
              <div className="daily-temp">
                <Skeleton className="temp" />
                <Skeleton className="temp" />
              </div>
            </div>
            <div className="daily-date">
              <Skeleton />
            </div>
          </div>
          <div className="Daily">
            <div className="daily-weather">
              <Skeleton className="img" />
              <div className="daily-temp">
                <Skeleton className="temp" />
                <Skeleton className="temp" />
              </div>
            </div>
            <div className="daily-date">
              <Skeleton />
            </div>
          </div>
          <div className="Daily">
            <div className="daily-weather">
              <Skeleton className="img" />
              <div className="daily-temp">
                <Skeleton className="temp" />
                <Skeleton className="temp" />
              </div>
            </div>
            <div className="daily-date">
              <Skeleton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLoader;
