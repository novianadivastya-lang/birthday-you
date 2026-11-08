export function initBirthday() {
  const envelope = document.getElementById("envelope");
  const letter = document.getElementById("letterContent");
  const openLetter = document.getElementById("openLetter");

  openLetter?.addEventListener("click", () => {
    envelope.hidden = true;
    letter.hidden = false;
  });

  const gift = document.getElementById("giftBox");
  const giftButton = document.getElementById("openGift");
  const message = document.getElementById("finalMessage");
  const replay = document.getElementById("replay");

  giftButton?.addEventListener("click", () => {
    gift.classList.add("opened");
    gift.textContent = "♡";
    message.hidden = false;
    giftButton.hidden = true;
    replay.hidden = false;
    document.dispatchEvent(new CustomEvent("birthday:gift-opened"));
  });
}
