import styles from "./FoundCharactersCount.module.css";

type Props = {
  foundCharacters: number;
};
function FoundCharactersCount({ foundCharacters }: Props) {
  return (
    <span className={styles.foundCharacters}>
      Found characters: {foundCharacters}
    </span>
  );
}

export default FoundCharactersCount;
