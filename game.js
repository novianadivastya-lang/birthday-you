const wishes = [
  "Semoga kebahagiaan selalu menemukan jalannya untuk datang ke kamu.",
  "Semoga semua impian kamu perlahan bisa jadi kenyataan.",
  "Semoga kamu selalu sehat dan bahagia.",
  "Semoga kamu bertemu dengan lebih banyak kesempatan baik.",
  "Jangan pernah berhenti menjadi versi terbaik dari dirimu sendiri.",
  "Semoga tahun ini membawa lebih banyak kebahagiaan dan hal baik untuk kamu."
];

export function initGame() {
  const wishText = document.getElementById("wishText");
  document.getElementById("anotherWish")?.addEventListener("click", () => {
    const previous = wishText.textContent;
    let next;
    do {
      next = wishes[Math.floor(Math.random() * wishes.length)];
    } while (next === previous && wishes.length > 1);

    wishText.style.opacity = "0";
    window.setTimeout(() => {
      wishText.textContent = next;
      wishText.style.opacity = "1";
    }, 220);
  });
}
