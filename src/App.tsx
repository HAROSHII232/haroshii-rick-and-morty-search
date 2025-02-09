import axios from "axios";
import { useState } from "react";
import "./App.css";
import { Character } from "./components/CharacterList/CharacterCard/CharacterCard.types";
import CharacterList from "./components/CharacterList/CharacterList";
import SearchBar from "./components/SearchBar/SearchBar";
import FoundCharactersCount from "./components/CharacterList/FoundCharactersCount/FoundCharactersCount";

function App() {
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

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
      {characters.length !== 0 && (
        <FoundCharactersCount foundCharacters={characters.length} />
      )}
      <CharacterList characters={characters} loading={loading} error={error} />
    </div>
  );
}

export default App;
