import {
  Application,
  Graphics,
  Text,
  TextStyle,
  Sprite,
  Assets,
  Container,
  Spritesheet,
  AnimatedSprite,
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
  document.body.appendChild(app.canvas);

  const atlasData = {
    frames: {
      walk1: {
        frame: { x: 0, y: 0, w: 16, h: 16 },
        sourceSize: { w: 64, h: 112 },
        spriteSourceSize: { x: 0, y: 0, w: 64, h: 112 },
      },
      walk2: {
        frame: { x: 0, y: 16, w: 16, h: 16 },
        sourceSize: { w: 64, h: 112 },
        spriteSourceSize: { x: 0, y: 0, w: 64, h: 112 },
      },
      walk3: {
        frame: { x: 0, y: 32, w: 16, h: 16 },
        sourceSize: { w: 64, h: 112 },
        spriteSourceSize: { x: 0, y: 0, w: 64, h: 112 },
      },
      walk4: {
        frame: { x: 0, y: 48, w: 16, h: 16 },
        sourceSize: { w: 64, h: 112 },
        spriteSourceSize: { x: 0, y: 0, w: 64, h: 112 },
      },

      walk_back1: {
        frame: { x: 16, y: 0, w: 16, h: 16 },
        sourceSize: { w: 64, h: 112 },
        spriteSourceSize: { x: 0, y: 0, w: 64, h: 112 },
      },
      walk_back2: {
        frame: { x: 16, y: 16, w: 16, h: 16 },
        sourceSize: { w: 64, h: 112 },
        spriteSourceSize: { x: 0, y: 0, w: 64, h: 112 },
      },
      walk_back3: {
        frame: { x: 16, y: 32, w: 16, h: 16 },
        sourceSize: { w: 64, h: 112 },
        spriteSourceSize: { x: 0, y: 0, w: 64, h: 112 },
      },
      walk_back4: {
        frame: { x: 16, y: 48, w: 16, h: 16 },
        sourceSize: { w: 64, h: 112 },
        spriteSourceSize: { x: 0, y: 0, w: 64, h: 112 },
      },
    },
    meta: {
      image: "/img/SpriteSheet.png",
      size: { w: 64, h: 112 },
    },
    animations: {
      walk: ["walk1", "walk2", "walk3", "walk4"],
      walk_back: ["walk_back1", "walk_back2", "walk_back3", "walk_back4"],
    },
  };

  const texture = await Assets.load(atlasData.meta.image);
  const spritesheet = new Spritesheet(texture, atlasData);
  await spritesheet.parse();

  //   const animatedsprite = new AnimatedSprite(spritesheet.animations.walk);
  const animatedsprite = new AnimatedSprite(spritesheet.animations.walk_back);
  animatedsprite.scale.set(2, 2);
  app.stage.addChild(animatedsprite);
  animatedsprite.play();
  animatedsprite.animationSpeed = 0.1;
})();
