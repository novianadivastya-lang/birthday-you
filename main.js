import { initNavigation } from "./navigation.js";
import { initGame } from "./game.js";
import { initGallery } from "./gallery.js";
import { initBirthday } from "./birthday.js";
import { initEffects } from "./effects.js";

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initGame();
  initGallery();
  initBirthday();
  initEffects();
});
