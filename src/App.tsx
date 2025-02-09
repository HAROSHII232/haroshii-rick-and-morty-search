import "./App.css";
import CharacterList from "./components/CharacterList/CharacterList";
import FoundCharactersCount from "./components/CharacterList/FoundCharactersCount/FoundCharactersCount";
import SearchBar from "./components/SearchBar/SearchBar";
import useCharacterSearch from "./hooks/useCharacterSearch";

function App() {
  const { characters, loading, error, setQuery } = useCharacterSearch();

  return (
    <div className="container">
      <SearchBar onSearch={setQuery} />
      {characters.length !== 0 && (
        <FoundCharactersCount foundCharacters={characters.length} />
      )}
      <CharacterList characters={characters} loading={loading} error={error} />
    </div>
  );
}

export default App;
