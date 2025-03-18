document.addEventListener("DOMContentLoaded", () => {
 
  // --- Curseur personnalisé ---
  let clientX = 1000, clientY = 1000;
  const innerCursor = document.querySelector(".cursor--small");
  document.addEventListener("mousemove", e => {
    clientX = e.clientX;
    clientY = e.clientY;
  });
  function renderCursor() {
    innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);
  
  // --- Initialisation du canvas pour Paper.js ---
  const initCanvas = () => {
    const canvas = document.querySelector(".cursor--canvas");
    paper.setup(canvas);

    const strokeColor = "rgba(255, 255, 255, 0.5)";
    const strokeWidth = 1.5;
    const segments = 8;
    const radius = 20;

    const polygon = new paper.Path.RegularPolygon(new paper.Point(0, 0), segments, radius);
    polygon.strokeColor = strokeColor;
    polygon.strokeWidth = strokeWidth;
    polygon.smooth();

    const group = new paper.Group([polygon]);
    group.applyMatrix = false;

    let lastX = 0, lastY = 0;
    const lerp = (a, b, n) => (1 - n) * a + n * b;

    paper.view.onFrame = () => {
      lastX = lerp(lastX, clientX, 0.2);
      lastY = lerp(lastY, clientY, 0.2);
      group.position = new paper.Point(lastX, lastY);
    };
  };

  initCanvas();
  
  // --- Gestion du redimensionnement de la fenêtre ---
  window.addEventListener("resize", () => {
    const canvas = document.querySelector(".cursor--canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    paper.view.viewSize = new paper.Size(window.innerWidth, window.innerHeight);
  });
});
