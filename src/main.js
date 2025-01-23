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
  TilingSprite,
  NoiseFilter,
} from "pixi.js";
import { Howl } from "howler";

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

  const bg_texture = await Assets.load("/img/bg2.jpg");
  const bgSprite = new TilingSprite({
    texture: bg_texture,
    width: app.screen.width,
    height: app.screen.height,
  });
  //   bgSprite.scale.set(4.5, 4.5);
  bgSprite.filters = [new NoiseFilter({ noise: 0.1 })];
  app.stage.addChild(bgSprite);

  //   SOUND
  const sound = new Howl({
    src: ["/audio/beep.mp3"],
  });

  let atlasData = await fetch("/img/atlas.json");
  atlasData = await atlasData.json();

  const texture = await Assets.load(atlasData.meta.image);
  const spritesheet = new Spritesheet(texture, atlasData);
  await spritesheet.parse();

  //   const animatedsprite = new AnimatedSprite(spritesheet.animations.walk);
  const animatedsprite = new AnimatedSprite(spritesheet.animations.walk);
  animatedsprite.scale.set(3, 3);
  animatedsprite.position.set(512, 512);
  app.stage.addChild(animatedsprite);
  animatedsprite.play();
  animatedsprite.animationSpeed = 0.1;

  animatedsprite.eventMode = "static";
  animatedsprite.on("mousedown", () => {
    sound.play();
  });

  app.ticker.add(() => {
    bgSprite.tilePosition.x -= 1;
  });
})();
