import { Character } from "./CharacterCard.types";
import styles from "./CharacterCard.module.css";
import { formatDate } from "../../../utils/formatDate";

type Props = {
  character: Character;
  key: number;
};

const CharacterCard = ({ character }: Props) => {
  const statusColor =
  character.status.toLowerCase() === "alive" ? styles.alive :
  character.status.toLowerCase() === "dead" ? styles.dead :
  styles.unknown;

  return (
    <a
      href={character.url}
      target="_blank"
      className={styles.card}
      rel="noreferrer"
    >
      <h3 className={styles.name}>{character.name}</h3>
      <div className={styles.footer}>
        <span className={`${styles.status}`}>
          Status: <span className={`${statusColor}`}>{character.status}</span>
        </span>
        <span className={styles.created}>
          Created: {formatDate(character.created)}
        </span>
      </div>
    </a>
  );
};

export default CharacterCard;
