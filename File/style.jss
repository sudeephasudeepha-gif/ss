:root {
  --bg-1: #12071f;
  --bg-2: #2b0f49;
  --bg-3: #ff8fab;
  --card: rgba(19, 10, 35, 0.72);
  --text: #fff7fb;
  --muted: #f8d8e6;
  --accent: #ffd166;
  --pink: #ff5d8f;
  --blue: #5cc8ff;
  --green: #6ee7b7;
  --yellow: #ffd166;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: "DM Sans", sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at top, rgba(255, 255, 255, 0.18), transparent 30%),
    linear-gradient(145deg, var(--bg-1), var(--bg-2) 45%, #4a155f 70%, var(--bg-3));
  overflow: hidden;
}

#confetti {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.hero {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
  position: relative;
}

.card {
  width: min(680px, 100%);
  padding: 36px 28px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 28px;
  background: var(--card);
  backdrop-filter: blur(20px);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);
  text-align: center;
  position: relative;
  z-index: 2;
}

.eyebrow {
  margin: 0 0 8px;
  color: var(--accent);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-size: 0.78rem;
  font-weight: 700;
}

h1 {
  margin: 0;
  font-size: clamp(2.5rem, 7vw, 4.7rem);
  line-height: 1.05;
  font-family: "Pacifico", cursive;
}

.message {
  margin: 18px auto 0;
  max-width: 540px;
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--muted);
}

.cake {
  width: 220px;
  margin: 34px auto 28px;
  position: relative;
  padding-top: 36px;
  animation: floatCake 3.2s ease-in-out infinite;
}

.candle {
  position: absolute;
  top: 0;
  left: 50%;
  width: 16px;
  height: 52px;
  margin-left: -8px;
  border-radius: 999px;
  background: repeating-linear-gradient(
    45deg,
    #fdfdfd 0 8px,
    #ff77a8 8px 16px
  );
}

.flame {
  position: absolute;
  left: 50%;
  bottom: calc(100% - 2px);
  width: 20px;
  height: 26px;
  margin-left: -10px;
  border-radius: 50% 50% 45% 45%;
  background: radial-gradient(circle at 50% 30%, #fff9c4, #ffb703 55%, #fb5607 85%);
  filter: drop-shadow(0 0 14px rgba(255, 184, 0, 0.7));
  animation: flicker 0.9s ease-in-out infinite alternate;
}

.layer {
  height: 42px;
  border-radius: 18px;
  position: relative;
  margin: 0 auto 10px;
}

.layer::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background:
    radial-gradient(circle at 10px 14px, #fff 0 7px, transparent 8px),
    radial-gradient(circle at 45px 12px, #fff 0 7px, transparent 8px),
    radial-gradient(circle at 80px 14px, #fff 0 7px, transparent 8px),
    radial-gradient(circle at 115px 12px, #fff 0 7px, transparent 8px),
    radial-gradient(circle at 150px 14px, #fff 0 7px, transparent 8px),
    radial-gradient(circle at 185px 12px, #fff 0 7px, transparent 8px);
  opacity: 0.8;
}

.top {
  width: 120px;
  background: linear-gradient(180deg, #ffcad4, #ff8fab);
}

.middle {
  width: 170px;
  background: linear-gradient(180deg, #ffd6a5, #ffb703);
}

.bottom {
  width: 220px;
  background: linear-gradient(180deg, #caffbf, #52b788);
}

.plate {
  width: 250px;
  height: 18px;
  margin: 0 auto;
  border-radius: 999px;
  background: linear-gradient(180deg, #ffffff, #d7e3fc);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
}

.actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.actions input,
.actions button {
  border: 0;
  border-radius: 999px;
  padding: 14px 18px;
  font: inherit;
}

.actions input {
  min-width: 220px;
  color: var(--text);
  background: rgba(255, 255, 255, 0.12);
  outline: 1px solid rgba(255, 255, 255, 0.14);
}

.actions input::placeholder {
  color: rgba(255, 247, 251, 0.7);
}

.actions button {
  font-weight: 700;
  color: #3a1024;
  background: linear-gradient(180deg, #ffe29a, #ffb703);
  cursor: pointer;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
  box-shadow: 0 12px 24px rgba(255, 183, 3, 0.25);
}

.actions button:hover {
  transform: translateY(-2px);
}

.balloons {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.balloon {
  position: absolute;
  bottom: -180px;
  width: 90px;
  height: 110px;
  border-radius: 50% 50% 45% 45%;
  animation: rise 11s linear infinite;
  opacity: 0.9;
}

.balloon::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 100%;
  width: 2px;
  height: 120px;
  background: rgba(255, 255, 255, 0.55);
}

.red {
  left: 8%;
  background: radial-gradient(circle at 30% 30%, #ffc2d1, #ff4d6d 70%);
  animation-delay: 0s;
}

.blue {
  left: 26%;
  background: radial-gradient(circle at 30% 30%, #d7f2ff, #4ea8de 70%);
  animation-delay: 3s;
}

.yellow {
  right: 24%;
  background: radial-gradient(circle at 30% 30%, #fff2c7, #ffb703 70%);
  animation-delay: 5s;
}

.green {
  right: 8%;
  background: radial-gradient(circle at 30% 30%, #d8ffe9, #52b788 70%);
  animation-delay: 1.5s;
}

@keyframes flicker {
  from {
    transform: translateX(-1px) scale(1);
  }
  to {
    transform: translateX(1px) scale(1.08);
  }
}

@keyframes floatCake {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes rise {
  from {
    transform: translateY(0) rotate(0deg);
  }
  to {
    transform: translateY(-135vh) rotate(8deg);
  }
}

@media (max-width: 640px) {
  .card {
    padding: 28px 18px;
  }

  .balloon {
    width: 70px;
    height: 88px;
  }

  .message {
    font-size: 0.96rem;
  }
}
