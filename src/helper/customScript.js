export const importCustomScript = () => {
  const script = document.createElement("script");
  script.src = "/assets/js/custom.js";
  script.id = "script-custom";
  document.body.appendChild(script);

  return script;
};
