import { Character } from "./CharacterCard.types";
import styles from "./CharacterCard.module.css";
import { formatDate } from "../../../utils/formatDate";

type Props = {
  character: Character;
  key: number;
};

const CharacterCard = ({ character }: Props) => {
  const statusColor =
    character.status.toLowerCase() === "alive" ? styles.alive : styles.dead;

  return (
    <a
      href={character.url}
      target="_blank"
      className={styles.card}
      rel="noreferrer"
    >
      <h3 className={styles.name}>{character.name}</h3>
      <p className={`${styles.status}`}>
        Status: <span className={`${statusColor}`}>{character.status}</span>
      </p>
      <p className={styles.created}>Created: {formatDate(character.created)}</p>
    </a>
  );
};

export default CharacterCard;
