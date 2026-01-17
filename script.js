document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("bookOrderForm");
    const message = document.getElementById("successMessage");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            message.classList.remove("hidden");

            // Reset form fields
            form.reset();

            // Auto-hide message after 3 seconds
            setTimeout(() => {
                message.classList.add("hidden");
            }, 3000);
        });
    }
});("DOMContentLoaded", () => {
    const form = document.getElementById("bookOrderForm");
    const message = document.getElementById("successMessage");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            message.classList.remove("hidden");
        });
    }
});
