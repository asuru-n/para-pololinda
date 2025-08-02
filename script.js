const messages = [
  "Te amo mamochaa💖",
  "Me gustas mas d lo k piensas :3",
  "Eres la ma mejor polola🌹",
  "quiero verte sonreir :(",
  "eres muy preciosaa😓",
  "eres proplayer en valo💸",
  "comer sushiballs contigo me hace felis😍",
  "amo tu cachetito literalmente 🥀",
  "quiero comer hamburgesas contigo 🍔",
  "te amo con todo mi corazoncito 💖",
  "te amo con todo mi ser 💖",
  "te amo con todo mi chilito",
  "te amo con todo mi alma ",
  "te adoro con cada parte de miiii :3",
  "llega el verano y las manos en el ano"
];

function createTextBubble() {
  const bubble = document.createElement("div");
  bubble.className = "text-bubble";
  bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

  const left = Math.random() * 80 + 10;
  const top = Math.random() * 80 + 10;

  bubble.style.position = "absolute";
  bubble.style.left = left + "vw";
  bubble.style.top = top + "vh";

  const container = document.getElementById("bubbles-text");
  container.appendChild(bubble);

  setTimeout(() => {
    const rect = bubble.getBoundingClientRect();

    if (rect.right > window.innerWidth) {
      const newLeft = window.innerWidth - rect.width - 10;
      bubble.style.left = `${newLeft}px`;
    }

    if (rect.bottom > window.innerHeight) {
      const newTop = window.innerHeight - rect.height - 10;
      bubble.style.top = `${newTop}px`;
    }

    if (rect.left < 0) {
      bubble.style.left = "10px";
    }

    if (rect.top < 0) {
      bubble.style.top = "10px";
    }
  }, 10);

  setTimeout(() => {
    bubble.remove();
  }, 8000);
}

setInterval(createTextBubble, 500);
