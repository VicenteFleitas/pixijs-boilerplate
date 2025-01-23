import {
  Application,
  Graphics,
  Text,
  TextStyle,
  Sprite,
  Assets,
} from "pixi.js";

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

  const rectangle = new Graphics()
    .rect(200, 200, 100, 150)
    .fill({
      color: "#e74c3c",
      alpha: 1,
    })
    .stroke({
      width: 8,
      color: "#f39c12",
    });
  app.stage.addChild(rectangle);

  const style = new TextStyle({
    fill: "#7f8c8d",
    fontSize: 72,
    fontFamily: "Roboto",
  });
  const text = new Text({
    text: "Hello Bits!",
    style: style,
  });
  app.stage.addChild(text);

  const texture = await Assets.load("/img/SpriteSheet.png");
  //   const sprite = Sprite.from(texture);
  const sprite = new Sprite(texture); // 128, 224
  sprite.x = 512;
  sprite.y = 256;
  sprite.scale.x = 2;
  sprite.scale.y = 2;
  sprite.anchor.x = 0.5;
  sprite.anchor.y = 0.5;
  sprite.rotation = Math.PI / 4;
  app.stage.addChild(sprite);

  document.body.appendChild(app.canvas);
})();
