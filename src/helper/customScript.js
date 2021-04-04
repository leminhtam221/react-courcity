export const importCustomScript = () => {
  const script = document.createElement("script");
  script.src = "/assets/js/custom.js";
  document.body.appendChild(script);

  return script;
};
