import { ChangeEvent, useState } from "react";
import styles from "./SearchBar.module.css";

type Props = {
  onSearch: (query: string) => void;
};

const SearchBar = ({ onSearch }: Props) => {
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
    </>
  );
};

export default SearchBar;
