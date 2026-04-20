const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
const celebrateBtn = document.getElementById("celebrateBtn");
const nameInput = document.getElementById("nameInput");
const nameLabel = document.getElementById("name");

const pieces = [];
const colors = ["#ff4d6d", "#ffd166", "#5cc8ff", "#6ee7b7", "#ffffff", "#c77dff"];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createBurst(amount = 180) {
  for (let i = 0; i < amount; i += 1) {
    pieces.push({
      x: random(canvas.width * 0.15, canvas.width * 0.85),
      y: random(-80, 40),
      size: random(6, 12),
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: random(-2.8, 2.8),
      vy: random(1.5, 5.2),
      gravity: random(0.04, 0.08),
      tilt: random(0, Math.PI * 2),
      spin: random(-0.1, 0.1),
    });
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = pieces.length - 1; i >= 0; i -= 1) {
    const piece = pieces[i];
    piece.x += piece.vx;
    piece.y += piece.vy;
    piece.vy += piece.gravity;
    piece.tilt += piece.spin;

    ctx.save();
    ctx.translate(piece.x, piece.y);
    ctx.rotate(piece.tilt);
    ctx.fillStyle = piece.color;
    ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size * 0.6);
    ctx.restore();

    if (piece.y > canvas.height + 30) {
      pieces.splice(i, 1);
    }
  }

  requestAnimationFrame(draw);
}

celebrateBtn.addEventListener("click", () => {
  const nextName = nameInput.value.trim();
  if (nextName) {
    nameLabel.textContent = nextName;
  }

  createBurst(220);
});

nameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    celebrateBtn.click();
  }
});

window.addEventListener("resize", resizeCanvas);

resizeCanvas();
createBurst(220);
draw();
