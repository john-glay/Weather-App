import { useState } from "react";
import "../styles/components/Search.scss";

function Search() {
  const [openSearchResults, setOpenSearchResults] = useState(false);
  const [text, setText] = useState("");

  const searchResults = [
    {
      id: "0",
      name: "City, Country",
    },
    {
      id: "1",
      name: "City, Country",
    },
    {
      id: "2",
      name: "City, Country",
    },
  ];

  const onSearch = (event) => {
    const value = event.target.value;
    setText(value);
    setOpenSearchResults(value.length > 0); // Open results only if input is not empty
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
      {openSearchResults && (
        <div className="search-results">
          {searchResults.map(({ id, name }) => (
            <div className="results-container" key={id}>
              <i className="bi bi-search"></i>
              {name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
