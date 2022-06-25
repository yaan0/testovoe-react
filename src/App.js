import { useState } from "react";
import "./App.css";
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";

const DEFAULT_ITEMS_PER_PAGE = 30;

function App() {
  const [searchResult, setSearchResult] = useState({
    items: [],
    total_count: 0,
  });

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
