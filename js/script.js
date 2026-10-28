// Mobile navigation and small page features.
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".navigation");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });
  }

  document.querySelectorAll(".year").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  const contactForm = document.querySelector("#contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      // Replace this with your own email address before using the contact form.
      const recipient = "your-email@example.com";
      const name = document.querySelector("#name").value.trim();
      const email = document.querySelector("#email").value.trim();
      const subject = document.querySelector("#subject").value.trim();
      const message = document.querySelector("#message").value.trim();

      if (recipient === "your-email@example.com") {
        document.querySelector("#formMessage").textContent =
          "Please add your email address in js/script.js before using this form.";
        return;
      }

      const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
      const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
      document.querySelector("#formMessage").textContent = "Your email app should open with the message ready to send.";
    });
  }
});
