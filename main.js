// Sidebar menu toggle
function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  menu.classList.toggle("active");
}

// Blasphemous Game
function showBlasphemous() {
  document.getElementById("blasphemousGame").style.display = "block";
}

const player = { el: null, pos: 20 };
const boss = { el: null, health: 100, pos: 220 };

document.addEventListener("DOMContentLoaded", () => {
  player.el = document.getElementById("player");
  boss.el = document.getElementById("boss");
});

// Move functions
function moveLeft() {
  player.pos = Math.max(0, player.pos - 10);
  player.el.style.left = player.pos + "px";
}

function moveRight() {
  player.pos = Math.min(260, player.pos + 10);
  player.el.style.left = player.pos + "px";
}

function attack() {
  const distance = Math.abs(player.pos - boss.pos);
  if (distance <= 50 && boss.health > 0) {
    boss.health -= 10;
    document.getElementById("bossHealth").textContent = boss.health;
    boss.el.style.borderColor = boss.health > 50 ? "orange" : "crimson";

    if (boss.health <= 0) {
      boss.el.innerText = "💀";
      boss.el.style.background = "#111";
      alert("🥶 that's so underrated man!!");
    }
  }
}

// Coin Game
const coin = document.getElementById("coin");
const scoreDisplay = document.getElementById("coinScore");
let score = 0;

coin.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
  moveCoin();
});

function moveCoin() {
  const area = document.getElementById("gameArea");
  const maxX = area.clientWidth - 30;
  const maxY = area.clientHeight - 30;
  const randX = Math.floor(Math.random() * maxX);
  const randY = Math.floor(Math.random() * maxY);
  coin.style.left = randX + "px";
  coin.style.top = randY + "px";
}