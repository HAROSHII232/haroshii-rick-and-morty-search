import { ChangeEvent, useState } from "react";
import styles from "./SearchBar.module.css";

type Props = {
  onSearch: (query: string) => void;
  foundCount: number;
};

const SearchBar = ({ onSearch, foundCount }: Props) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setQuery(value);
    if (value.length >= 2) {
      onSearch(value);
    }
  };

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search characters..."
        className={styles.input}
        autoFocus
      />
      {query && query.length < 3 ? (
        <p className={styles.errorMessage}>
          Please enter more than 3 characters
        </p>
      ) : (
        query && (
          <p className={styles.foundCharacters}>
            Found characters: {foundCount}
          </p>
        )
      )}
    </>
  );
};

export default SearchBar;
