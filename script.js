document.addEventListener("DOMContentLoaded", function () {
  // Automatically display the current year in the footer.
  const yearElement = document.getElementById("year");
  if (yearElement) yearElement.textContent = new Date().getFullYear();

  // Accessible mobile navigation.
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      const isOpen = navLinks.classList.toggle("active");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open menu");
        menuToggle.textContent = "☰";
      });
    });
  }

  // Send the enquiry details to the InfraCoTech WhatsApp number.
  const supportForm = document.getElementById("supportForm");
  const formStatus = document.getElementById("formStatus");

  if (supportForm) {
    supportForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const customerName = document.getElementById("customerName").value.trim();
      const customerPhone = document.getElementById("customerPhone").value.trim();
      const service = document.getElementById("service").value;
      const issue = document.getElementById("issue").value.trim();

      if (!customerName || !customerPhone || !service || !issue) {
        if (formStatus) formStatus.textContent = "Please complete all fields.";
        return;
      }

      const message =
        "Hello InfraCoTech!\\n\\n" +
        "I would like to request IT support.\\n\\n" +
        "Name: " + customerName + "\\n" +
        "Contact Number: " + customerPhone + "\\n" +
        "Service Required: " + service + "\\n" +
        "Requirement Details: " + issue + "\\n\\n" +
        "Please contact me regarding this request.";

      const whatsappURL = "https://wa.me/916395555954?text=" + encodeURIComponent(message);

      if (formStatus) {
        formStatus.textContent = "Opening WhatsApp. Please review your message and press Send.";
      }

      window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });
  }
});
