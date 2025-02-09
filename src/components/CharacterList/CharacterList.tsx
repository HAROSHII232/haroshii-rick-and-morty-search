import CharacterCard from "./CharacterCard/CharacterCard";
import { Character } from "./CharacterCard/CharacterCard.types";
import styles from "./CharacterList.module.css";

type Props = {
  characters: Character[];
  loading: boolean;
  error: string;
};

function CharacterList({ characters, error, loading }: Props) {
  return (
    <div>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      {characters && (
        <div className={styles.characterList}>
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CharacterList;
