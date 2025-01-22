import { Application, Graphics } from "pixi.js";

(async () => {
  const app = new Application();
  await app.init({
    // width: 1024,
    // height: 512,
    resizeTo: window,
    backgroundColor: "#2c3e50",
    // antialias: true,
  });
  app.canvas.style.position = "absolute";
  document.body.style.margin = 0;

  const rectangle = new Graphics();
  rectangle.rect(200, 200, 100, 150);
  rectangle.fill({
    color: "#e74c3c",
    alpha: 1,
  });
  app.stage.addChild(rectangle);

  document.body.appendChild(app.canvas);
})();
