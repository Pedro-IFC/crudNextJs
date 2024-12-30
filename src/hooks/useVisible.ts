import { useState } from "react";

export default function useVisible() {
  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");

  const setTabelaVisivel = () => setVisivel("tabela");
  const setFormVisivel = () => setVisivel("form");

  return {
    formularioVisivel: visivel === "form",
    tabelaVisivel: visivel === "tabela",
    setFormVisivel,
    setTabelaVisivel,
  };
}
