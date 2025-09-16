import { getWeather } from "../model/weather.js";
import { renderTree } from "../view/treeView.js";

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("tree-container");
  const weather = await getWeather("Angers");
  renderTree(container, weather);
});
