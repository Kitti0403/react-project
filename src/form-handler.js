// Form submission handler
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#contact-form");

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const submitButton = form.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;

      // Show loading state
      submitButton.textContent = "Sending... 📤";
      submitButton.disabled = true;

      try {
        const formData = new FormData(form);

        // Send to Formspree
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          // Success
          submitButton.textContent = "Message Sent! ✅";
          submitButton.style.backgroundColor = "#4CAF50";

          // Reset form after 3 seconds
          setTimeout(() => {
            form.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            submitButton.style.backgroundColor = "";
          }, 3000);

          // Show success message
          showMessage(
            "Thanks for your message! I'll get back to you soon! 😊",
            "success"
          );
        } else {
          throw new Error("Network response was not ok");
        }
      } catch (error) {
        // Error
        submitButton.textContent = "Error! Try Again ❌";
        submitButton.style.backgroundColor = "#f44336";

        setTimeout(() => {
          submitButton.textContent = originalText;
          submitButton.disabled = false;
          submitButton.style.backgroundColor = "";
        }, 3000);

        showMessage(
          "Oops! Something went wrong. Please try again or email me directly.",
          "error"
        );
      }
    });
  }
});

function showMessage(text, type) {
  // Create message element
  const message = document.createElement("div");
  message.className = `form-message form-message-${type}`;
  message.textContent = text;

  // Style the message
  Object.assign(message.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    padding: "1rem 1.5rem",
    borderRadius: "8px",
    color: "white",
    fontWeight: "500",
    zIndex: "1000",
    maxWidth: "400px",
    backgroundColor: type === "success" ? "#4CAF50" : "#f44336",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    transform: "translateX(100%)",
    transition: "transform 0.3s ease",
  });

  document.body.appendChild(message);

  // Animate in
  setTimeout(() => {
    message.style.transform = "translateX(0)";
  }, 100);

  // Animate out and remove
  setTimeout(() => {
    message.style.transform = "translateX(100%)";
    setTimeout(() => {
      document.body.removeChild(message);
    }, 300);
  }, 5000);
}
