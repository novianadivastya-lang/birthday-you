export function initEffects() {
  document.addEventListener("birthday:gift-opened", createConfetti);
}

function createConfetti() {
  const colors = ["#d8c49b", "#ffffff", "#7f9fcb", "#a9bddb"];

  for (let i = 0; i < 48; i++) {
    const piece = document.createElement("span");
    piece.style.cssText = `
      position: fixed; z-index: 20; pointer-events: none;
      width: 7px; height: 7px; border-radius: 50%;
      left: ${Math.random() * 100}vw; top: -12px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
    `;
    document.body.appendChild(piece);

    const animation = piece.animate([
      { transform: "translateY(0) rotate(0)", opacity: 1 },
      { transform: `translateY(110vh) rotate(${Math.random() * 720}deg)`, opacity: 0 }
    ], { duration: 1800 + Math.random() * 1800, easing: "ease-out" });

    animation.onfinish = () => piece.remove();
  }
}
