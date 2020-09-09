import { useEffect } from "react";

function useDocumentTitle(count) {
  useEffect(() => {
    console.log("mounted / re-rendered from custom hook");
    document.title = `Count ${count}`;
  }, [count]);
}

export default useDocumentTitle;
