/*=====================================
        SIGNUP VALIDATION
======================================*/

const signupForm = document.getElementById("signupForm");

if (signupForm) {
  const fullName = document.getElementById("fullName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const roleError = document.getElementById("roleError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");

  /*=====================================
        VALIDATION FUNCTIONS
======================================*/

  function validateName() {
    const value = fullName.value.trim();
    const pattern = /^[A-Za-z ]+$/;

    if (value === "") {
      nameError.textContent = "Full Name is required.";
      return false;
    }

    if (!pattern.test(value)) {
      nameError.textContent = "Name should contain only alphabets.";
      return false;
    }

    if (value.length < 3) {
      nameError.textContent = "Name must contain at least 3 characters.";
      return false;
    }

    nameError.textContent = "";
    return true;
  }

  function validateEmail() {
    const value = email.value.trim();

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value === "") {
      emailError.textContent = "Email Address is required.";
      return false;
    }

    if (!pattern.test(value)) {
      emailError.textContent = "Please enter a valid Email Address.";
      return false;
    }

    emailError.textContent = "";
    return true;
  }

  function validatePassword() {
    const value = password.value;

    const pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (value === "") {
      passwordError.textContent = "Password is required.";
      return false;
    }

    if (!pattern.test(value)) {
      passwordError.textContent =
        "Minimum 6 characters, 1 uppercase, 1 number & 1 special character.";

      return false;
    }

    passwordError.textContent = "";
    return true;
  }

  function validateConfirmPassword() {
    if (confirmPassword.value === "") {
      confirmPasswordError.textContent = "Confirm Password is required.";

      return false;
    }

    if (password.value !== confirmPassword.value) {
      confirmPasswordError.textContent = "Passwords do not match.";

      return false;
    }

    confirmPasswordError.textContent = "";
    return true;
  }

  function validateRole() {
    const role = document.querySelector('input[name="role"]:checked');

    if (!role) {
      roleError.textContent = "Please select your role.";

      return false;
    }

    roleError.textContent = "";

    return true;
  }

  /*=====================================
        LIVE VALIDATION
======================================*/

  fullName.addEventListener("input", validateName);

  email.addEventListener("input", validateEmail);

  password.addEventListener("input", () => {
    validatePassword();

    if (confirmPassword.value !== "") {
      validateConfirmPassword();
    }
  });

  confirmPassword.addEventListener("input", validateConfirmPassword);

  document.querySelectorAll('input[name="role"]').forEach((role) => {
    role.addEventListener("change", validateRole);
  });

  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    clearErrors();

    let isValid = true;

    /*============ NAME ============*/

    const namePattern = /^[A-Za-z ]+$/;

    if (fullName.value.trim() === "") {
      nameError.textContent = "Full Name is required.";

      isValid = false;
    } else if (!namePattern.test(fullName.value.trim())) {
      nameError.textContent = "Name should contain only alphabets.";

      isValid = false;
    } else if (fullName.value.trim().length < 3) {
      nameError.textContent = "Name must contain at least 3 characters.";

      isValid = false;
    }

    /*============ EMAIL ============*/

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
      emailError.textContent = "Email Address is required.";

      isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      emailError.textContent = "Please enter a valid Email Address.";

      isValid = false;
    }
    /*============ ROLE ============*/

    const role = document.querySelector('input[name="role"]:checked');

    if (!role) {
      roleError.textContent = "Please select your role.";

      isValid = false;
    }

    /*============ PASSWORD ============*/

    const passwordPattern =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (password.value === "") {
      passwordError.textContent = "Password is required.";

      isValid = false;
    } else if (!passwordPattern.test(password.value)) {
      passwordError.textContent =
        "Password must be at least 6 characters and include 1 uppercase letter, 1 number, and 1 special character.";

      isValid = false;
    }
    /*============ CONFIRM PASSWORD ============*/

    if (confirmPassword.value === "") {
      confirmPasswordError.textContent = "Confirm Password is required.";

      isValid = false;
    } else if (password.value !== confirmPassword.value) {
      confirmPasswordError.textContent = "Passwords do not match.";

      isValid = false;
    }
    /*============ SUCCESS ============*/

    if (isValid) {
      showToast("Account created successfully!", "success");

      setTimeout(() => {
        window.location.href = "login.html";
      }, 1800);
    }
  });
}

/*=====================================
        CLEAR ERRORS
======================================*/

function clearErrors() {
  const errors = document.querySelectorAll(".error");

  errors.forEach((error) => {
    error.textContent = "";
  });
}

/*=====================================
        PASSWORD TOGGLE
======================================*/

const toggleIcons = document.querySelectorAll(".toggle-password");

toggleIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const input = document.getElementById(icon.dataset.target);

    if (input.type === "password") {
      input.type = "text";

      icon.classList.remove("fa-eye");

      icon.classList.add("fa-eye-slash");
    } else {
      input.type = "password";

      icon.classList.remove("fa-eye-slash");

      icon.classList.add("fa-eye");
    }
  });
});

/*=====================================
        TOAST MESSAGE
======================================*/
function showToast(message, type) {
  const container = document.getElementById("toastContainer");

  const toast = document.createElement("div");

  toast.className = `toast ${type}`;

  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    toast.classList.remove("show");

    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 2500);
}
/*=====================================
        LOGIN VALIDATION
======================================*/

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  const loginEmail = document.getElementById("loginEmail");
  const loginPassword = document.getElementById("loginPassword");

  const loginEmailError = document.getElementById("loginEmailError");
  const loginPasswordError = document.getElementById("loginPasswordError");
  const loginRoleError = document.getElementById("loginRoleError");

  function validateLoginEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (loginEmail.value.trim() === "") {
      loginEmailError.textContent = "Email Address is required.";
      return false;
    }

    if (!emailPattern.test(loginEmail.value.trim())) {
      loginEmailError.textContent = "Please enter a valid Email Address.";
      return false;
    }

    loginEmailError.textContent = "";
    return true;
  }

  function validateLoginPassword() {
    const passwordPattern =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (loginPassword.value === "") {
      loginPasswordError.textContent = "Password is required.";
      return false;
    }

    if (!passwordPattern.test(loginPassword.value)) {
      loginPasswordError.textContent = "Enter a valid password.";

      return false;
    }

    loginPasswordError.textContent = "";
    return true;
  }

  function validateLoginRole() {
    const role = document.querySelector('input[name="loginRole"]:checked');

    if (!role) {
      loginRoleError.textContent = "Please select your role.";

      return false;
    }

    loginRoleError.textContent = "";

    return true;
  }

  loginEmail.addEventListener("input", validateLoginEmail);

  loginPassword.addEventListener("input", validateLoginPassword);

  document.querySelectorAll('input[name="loginRole"]').forEach((radio) => {
    radio.addEventListener("change", validateLoginRole);
  });

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;

    if (!validateLoginEmail()) valid = false;

    if (!validateLoginPassword()) valid = false;

    if (!validateLoginRole()) valid = false;

    if (valid) {
      showToast("Login Successful!", "success");

      const role = document.querySelector(
        'input[name="loginRole"]:checked',
      ).value;

      setTimeout(() => {
        switch (role) {
          case "Client":
            window.location.href = "client-dashboard.html";

            break;

          case "Admin":
            window.location.href = "admin-dashboard.html";

            break;

          default:
            window.location.href = "index.html";
        }
      }, 1800);
    }
  });
}

/*=====================================
        FORGOT PASSWORD
======================================*/

const forgotForm = document.getElementById("forgotForm");

if (forgotForm) {
  const forgotEmail = document.getElementById("forgotEmail");
  const forgotEmailError = document.getElementById("forgotEmailError");

  function validateForgotEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (forgotEmail.value.trim() === "") {
      forgotEmailError.textContent = "Email Address is required.";

      return false;
    }

    if (!emailPattern.test(forgotEmail.value.trim())) {
      forgotEmailError.textContent = "Please enter a valid registered email.";

      return false;
    }

    forgotEmailError.textContent = "";

    return true;
  }

  forgotEmail.addEventListener("input", validateForgotEmail);

  forgotForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!validateForgotEmail()) return;

    showToast("Redirecting...", "success");

    setTimeout(() => {
      window.location.href = "404.html";
    }, 1500);
  });
}
