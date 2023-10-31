import { MyDiv } from "@/components/MyDiv";
import { useGlobalStyles } from "@/contexts/global-styles-context";

export default function Home() {
  const { loading: isStylesLoading, styles } = useGlobalStyles();

  return (
    <main>
      <div
        style={{
          marginBottom: 20,
          backgroundColor: styles?.backgroundColor,
        }}
      >
        Essa div usa apenas os estilos dinamicos. carregando:{" "}
        {isStylesLoading ? "sim" : "não"}
      </div>

      <MyDiv />
    </main>
  );
}
