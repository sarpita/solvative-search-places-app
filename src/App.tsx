import React, { useState } from 'react';
import SearchBox from './components/SearchBox';
import ResultsTable from './components/ResultsTable';
import Pagination from './components/Pagination';
import Loader from './components/Loader';
import './styles/App.css';
import usePlacesSearch from './hooks/usePlacesSearch';

const App: React.FC = () => {
  const { places, loading, searchPlaces } = usePlacesSearch();
  const [limit, setLimit] = useState<number>(5);
  const [page, setPage] = useState<number>(0);
  const [query, setQuery] = useState<string>("");

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);  
    setPage(0); 
    searchPlaces(newQuery, limit, 0);
  };

  const handleNextPage = () => {
    setPage(page + 1);
    searchPlaces(query, limit, page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
      searchPlaces(query, limit, page - 1);
    }
  };

  return (
    <div className="app">
      <h1>Search Places</h1>
      <SearchBox onSearch={handleSearch} />
      <div className="limit-control">
        <label>
          Items per page:
          <input
            type="number"
            min="5"
            max="10"
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
          />
        </label>
      </div>
      {loading ? <Loader /> : <ResultsTable places={places} />}
      <Pagination
        page={page}
        onPrevious={handlePreviousPage}
        onNext={handleNextPage}
      />
    </div>
  );
};

export default App;
