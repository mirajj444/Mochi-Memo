document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("registerForm");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const passwordError = document.getElementById("passwordError");

  confirmPasswordInput.addEventListener("input", function () {
    const password = passwordInput.value;
    const confirmPassword = this.value;

    if (password !== confirmPassword && confirmPassword.length > 0) {
      passwordError.style.display = "block";
    } else {
      passwordError.style.display = "none";
    }
  });

  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
      passwordError.style.display = "block";
      confirmPasswordInput.focus();
      return;
    }

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    console.log("Registration data:", { username, email, password });

    window.location.href = "index.html";
  });
});
