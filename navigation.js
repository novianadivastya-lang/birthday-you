export function initNavigation() {
  const pages = [...document.querySelectorAll(".page")];

  function goToPage(id) {
    pages.forEach(page => page.classList.toggle("active", page.id === id));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.querySelectorAll("[data-go]").forEach(button => {
    button.addEventListener("click", () => goToPage(button.dataset.go));
  });

  document.getElementById("replay")?.addEventListener("click", () => {
    document.getElementById("envelope").hidden = false;
    document.getElementById("letterContent").hidden = true;
    document.getElementById("giftBox").textContent = "♡";
    document.getElementById("giftBox").classList.remove("opened");
    document.getElementById("finalMessage").hidden = true;
    document.getElementById("openGift").hidden = false;
    goToPage("opening");
  });
}
