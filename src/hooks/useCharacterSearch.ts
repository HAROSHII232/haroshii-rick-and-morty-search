import { useState } from "react";
import axios from "axios";
import { Character } from "../components/CharacterList/CharacterCard/CharacterCard.types";

const useCharacterSearch = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

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

  return { characters, loading, error, handleSearch };
};

export default useCharacterSearch;
