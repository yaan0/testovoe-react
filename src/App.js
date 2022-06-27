import { useState } from "react";
import "./App.css";
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";

import { DEFAULT_EMPTY_RESULT } from "./api/getRepositories";

function App() {
  const [searchResult, setSearchResult] = useState(DEFAULT_EMPTY_RESULT);
  const [itemsPerPage, setItemsPerPage] = useState(30);

  return (
    <div className="App">
      <header className="App-header">
        <Search onSearchFinished={(data) => setSearchResult(data)} />
      </header>

      <main>
        {searchResult.items.map((searchItem) => (
          <Card searchItem={searchItem} />
        ))}
      </main>
    </div>
  );
}

export default App;
