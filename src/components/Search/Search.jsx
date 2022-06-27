import { useState } from "react";
import { getGithubRepositories } from "../../api/getRepositories";

const Search = ({ onSearchFinished }) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const onClick = () => {
    getGithubRepositories(searchPhrase).then((data) => {
      onSearchFinished(data);
    });
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
