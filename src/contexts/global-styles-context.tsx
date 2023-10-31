import React, { createContext, useContext, useEffect, useState } from "react";

type GlobalStylesValue = {
  styles: {
    backgroundColor: string;
  } | null;
  loading: boolean;
};

const GlobalStylesContext = createContext<GlobalStylesValue>(
  {} as GlobalStylesValue,
);

export function GlobalStylesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [styles, setStyles] = useState<GlobalStylesValue["styles"] | null>(
    null,
  );

  const loading = !styles;

  // aqui é onde vc carrega
  async function loadStyles() {
    // timeout de 2.5seg só pra simular
    await new Promise((resolve) => setTimeout(resolve, 2500));

    setStyles({
      backgroundColor: "#ccc",
    });
  }

  // chama o load styles assim que a app carregar
  useEffect(() => {
    loadStyles();
  }, []);

  const value = { styles, loading };

  return (
    <GlobalStylesContext.Provider value={value}>
      {children}
    </GlobalStylesContext.Provider>
  );
}

export function useGlobalStyles() {
  const context = useContext(GlobalStylesContext);

  if (!context) {
    throw new Error(
      "useGlobalStyles must be used in a component wrapped by GlobalStylesProvider.",
    );
  }

  return context;
}
