import axios from "axios";
import { useState } from "react";
import "./App.css";
import CharacterCard from "./components/Character/CharacterCard";
import { Character } from "./components/Character/CharacterCard.types";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async (query: string) => {
    if (query.length <= 2) {
      setCharacters([]);
      return;
    }

    setLoading(true);

    try {
      setCharacters([]);
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${query}`
      );
      setCharacters(response.data.results);
    } catch (error: any) {
      console.error("Error fetching data:", error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} foundCount={characters.length} />
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
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
