import React, { useState, useRef, useEffect } from 'react';
import './searchbox.css';

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === '/') {
        event.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {  // Ensure query is not empty before making API call
      onSearch(query);
    }
  };

  return (
    <div className={`search-box-container ${isFocused ? 'focused' : ''}`}>
      <input
        type="text"
        placeholder="Search places..."
        ref={searchInputRef}
        value={query}
        onChange={handleSearch}
        onKeyPress={handleKeyPress}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="search-box"
      />
      <span className="search-hint">Ctrl + /</span>
    </div>
  );
};

export default SearchBox;
