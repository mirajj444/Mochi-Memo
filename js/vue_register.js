document.addEventListener("DOMContentLoaded", function () {
  new Vue({
    el: "#register",
    data: {
      form: {
        username: "",
        email: "",
        password: "",
        valid_password: "",
      },
      showPasswordError: false,
    },
    methods: {
      checkPasswordMatch() {
        if (this.form.confirmPassword.length > 0) {
          this.showPasswordError =
            this.form.password !== this.form.valid_password;
        } else {
          this.showPasswordError = false;
        }
      },
      handleSubmit() {
        if (
          !this.form.username ||
          !this.form.email ||
          !this.form.password ||
          !this.form.confirmPassword
        ) {
          alert("Please fill in all fields");
          return;
        }

        if (this.form.password !== this.form.confirmPassword) {
          this.showPasswordError = true;
          alert("Passwords do not match!");
          return;
        }

        window.location.href = "index.html";
      },
    },
  });
});
