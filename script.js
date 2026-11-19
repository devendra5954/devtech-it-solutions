/*
  IMPORTANT: Update the business details in the CONFIG section before publishing.
  WhatsApp number must include country code, digits only (India: 91XXXXXXXXXX).
*/
const CONFIG = {
  businessName: "DevTech IT Solutions",
  phoneDisplay: "+91 XXXXX XXXXX",
  phoneLink: "+91XXXXXXXXXX",
  whatsappNumber: "91XXXXXXXXXX",
  email: "your-email@example.com"
};

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
menuToggle.addEventListener("click", () => {
  const open = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
navMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navMenu.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

// Add your actual contact details in CONFIG above.
document.querySelectorAll("[data-phone]").forEach(el => {
  el.textContent = CONFIG.phoneDisplay;
  el.href = "tel:" + CONFIG.phoneLink;
});
document.querySelectorAll("[data-email]").forEach(el => {
  el.textContent = CONFIG.email;
  el.href = "mailto:" + CONFIG.email;
});
const floatButton = document.getElementById("whatsappFloat");
floatButton.href = "https://wa.me/" + CONFIG.whatsappNumber + "?text=" + encodeURIComponent("Hello " + CONFIG.businessName + ", I need IT support. Please contact me.");

document.querySelectorAll("[data-service]").forEach(link => {
  link.addEventListener("click", () => {
    const select = document.querySelector('select[name="service"]');
    if (select) select.value = link.dataset.service;
  });
});
document.querySelectorAll("[data-plan]").forEach(link => {
  link.addEventListener("click", () => {
    const select = document.querySelector('select[name="service"]');
    if (select) select.value = "IT AMC & Maintenance";
    const message = document.querySelector('textarea[name="message"]');
    if (message) message.value = "I am interested in the " + link.dataset.plan + " package. Please share the details.";
  });
});

document.getElementById("enquiryForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(this);
  const required = ["name", "phone", "service", "message"];
  for (const key of required) {
    if (!String(data.get(key) || "").trim()) {
      document.getElementById("formStatus").textContent = "Please complete all required fields.";
      return;
    }
  }
  const message = [
    "NEW IT SUPPORT ENQUIRY",
    "Business: " + CONFIG.businessName,
    "Name: " + data.get("name"),
    "Company: " + (data.get("company") || "Not provided"),
    "Phone: " + data.get("phone"),
    "Email: " + (data.get("email") || "Not provided"),
    "Service: " + data.get("service"),
    "Requirement: " + data.get("message")
  ].join("\n");
  document.getElementById("formStatus").textContent = "Opening WhatsApp with your enquiry. Please press Send in WhatsApp to submit it.";
  const url = "https://wa.me/" + CONFIG.whatsappNumber + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank", "noopener");
});
