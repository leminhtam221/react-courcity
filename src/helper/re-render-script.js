export const reReRenderScript = () => {
  const script = document.createElement("script");
  script.src = "/assets/js/custom.js";
  document.body.appendChild(script);
  document.body.removeChild(script);
};
