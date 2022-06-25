import { useState } from "react";

const Search = ({ onSearchFinished }) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const onClick = () => {
    fetch(`https://api.github.com/search/repositories?q=${searchPhrase}`)
      .then((response) => response.json())
      .then((data) => onSearchFinished(data));
  };

  return (
    <div className="Search">
      <input
        onChange={(event) => {
          setSearchPhrase(event.target.value);
        }}
        type={"Search"}
      />
      <button onClick={onClick}>Search</button>
    </div>
  );
};

export default Search;
