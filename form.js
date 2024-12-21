document.addEventListener("DOMContentLoaded", () => {
  // Handle form submission
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
    form.reset();
  });
});