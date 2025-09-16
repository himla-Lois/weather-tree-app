export function renderTree(container, weather) {
  container.innerHTML = `
    <div class="tree ${weather.season} ${weather.condition}">
      <p>${weather.city}: ${weather.temp}°C, ${weather.condition}</p>
      <div class="tree-graphic">🌳</div>
    </div>
  `;
}
