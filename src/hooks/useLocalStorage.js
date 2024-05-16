import { useEffect, useState } from "react";
import { marked } from "marked";
const useLocalStorage = () => {
  const [code, setCode] = useState(() => {
    return localStorage.getItem("markdown") || "## Hello";
  });
  const [compiled, setCompiled] = useState(() => {
    return (
      marked.parse(localStorage.getItem("markdown")) ||
      '<h2 id="hello">Hello</h2>'
    );
  });
  useEffect(() => {
    localStorage.setItem("markdown", code);
  }, [code]);
  const handleChange = (e) => {
    setCode(e.target.value);
    setCompiled(marked.parse(e.target.value));
  };
  return { code, compiled, handleChange };
};

export default useLocalStorage;
