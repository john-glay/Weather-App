import isoCountries from "../api/isoCountries";
import WeatherContext from "../context/weather.context";
import { useContext, useState } from "react";
import { searchPlaces } from "../api";
import "../styles/components/Search.scss";

function Search() {
  const { setPlace } = useContext(WeatherContext);
  const [text, setText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [openSearchResults, setOpenSearchResults] = useState(false);

  async function onSearch(e) {
    const searchText = e.target.value;
    setText(searchText);

    if (searchText.trim() === "") {
      setSearchResults([]);
      setOpenSearchResults(false);
      return;
    }

    try {
      if (searchText !== "") {
        const data = await searchPlaces(searchText);
        if (data && data.length > 0) {
          const uniqueResults = data.filter(
            (place, index, self) =>
              index ===
              self.findIndex(
                (p) => p.name === place.name && p.country === place.country
              )
          );
          setSearchResults(uniqueResults);
          setOpenSearchResults(true);
        } else {
          setSearchResults([]);
          setOpenSearchResults(false);
        }
      }
    } catch (error) {
      console.error("Error during search:", error);
      setSearchResults([]);
      setOpenSearchResults(false);
    }
  }

  const changePlace = (place) => {
    setPlace(place);
    setText("");
    setOpenSearchResults(false);
  };

  return (
    <div className="Search">
      <i className="bi bi-search"></i>
      <input
        type="text"
        placeholder="Search for location"
        value={text}
        onChange={onSearch}
      />
      {openSearchResults && searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((place) => (
            <div
              className="results-container"
              key={`${place.lat}-${place.lon}`}
              onClick={() => changePlace(place)}
            >
              <i className="bi bi-search"></i>
              {place.name}, {isoCountries[place.country] || place.country}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
