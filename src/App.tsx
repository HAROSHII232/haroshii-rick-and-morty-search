import axios from "axios";
import { useState } from "react";
import "./App.css";
import CharacterCard from "./components/Character/CharacterCard";
import { Character } from "./components/Character/CharacterCard.types";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";

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
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${query}`
      );
      setError("");
      setCharacters(response.data.results);
    } catch (error: any) {
      setError(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} foundCount={characters.length} />
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {characters && (
          <div>
            {characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
