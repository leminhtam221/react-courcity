import { useEffect } from "react";

export default function useImportScript() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/assets/js/custom.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  });
}
