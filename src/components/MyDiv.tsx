import styles from "./MyDiv.module.css";

import { useGlobalStyles } from "@/contexts/global-styles-context";

export function MyDiv() {
  const { styles: globalStyles, loading } = useGlobalStyles();

  return (
    <div
      className={styles["my-div"]}
      style={{ backgroundColor: globalStyles?.backgroundColor }}
    >
      Essa div usa estilos css module e sobrescreve com dinamicos. carregando:{" "}
      {loading ? "sim" : "não"}
    </div>
  );
}
