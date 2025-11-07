document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contactForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#fullname").value.trim();
    const email = document.querySelector("#email").value.trim();
    const subject = document.querySelector("#subject").value.trim();
    const category = document.querySelector("#category").value;
    const message = document.querySelector("#message").value.trim();

    // Validation
    if (!name || !email || !message) {
      showPopup("⚠️ Please fill in all required fields.", "error");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      showPopup("❌ Please enter a valid email address.", "error");
      return;
    }

    // If everything is valid
    alert("✅ Your message has been sent successfully!");
    showPopup("✅ Your message has been sent successfully!", "success");

    // Reset form
    form.reset();
  });

  // Popup Function
  function showPopup(message, type) {
    const overlay = document.createElement("div");
    overlay.className = "popup-overlay";

    const popup = document.createElement("div");
    popup.className = `popup-box ${type}`;
    popup.innerHTML = `<p>${message}</p><button class="close-btn">OK</button>`;

    overlay.appendChild(popup);
    document.body.appendChild(overlay);

    const closeBtn = popup.querySelector(".close-btn");
    closeBtn.addEventListener("click", () => overlay.remove());

    setTimeout(() => overlay.remove(), 3000);
  }
});
