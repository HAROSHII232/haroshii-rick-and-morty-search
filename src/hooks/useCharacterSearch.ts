import { useEffect, useState } from "react";
import axios from "axios";
import { Character } from "../components/CharacterList/CharacterCard/CharacterCard.types";
import useDebounce from "./useDebounce";

const useCharacterSearch = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const debouncedQuery = useDebounce(query, 700);

  const handleSearch = async (query: string) => {
    if (query.length <= 2) {
      setCharacters([]);
      setError("");
      return;
    }

    setLoading(true);

    try {
      setCharacters([]);
      setError("");
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${query}`
      );
      setCharacters(response.data.results);
    } catch (error: any) {
      setError(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (debouncedQuery) {
      handleSearch(debouncedQuery);
    }
  }, [debouncedQuery]);

  return { characters, loading, error, setQuery };
};

export default useCharacterSearch;
