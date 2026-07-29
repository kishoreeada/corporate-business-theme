// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

// Sticky Header Shadow
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 10px 25px rgba(0,0,0,.12)";
  } else {
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";
  }
});

// Current Year (optional)
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

/*================ CONTACT FORM =================*/

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const company = document.getElementById("company");
    const message = document.getElementById("message");

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("companyError").textContent = "";
    document.getElementById("messageError").textContent = "";

    if (name.value.trim() == "") {
      document.getElementById("nameError").textContent = "Name is required";
      valid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.value.match(emailPattern)) {
      document.getElementById("emailError").textContent = "Enter valid email";
      valid = false;
    }

    if (phone.value.trim().length < 10) {
      document.getElementById("phoneError").textContent =
        "Enter valid phone number";
      valid = false;
    }

    if (company.value.trim() == "") {
      document.getElementById("companyError").textContent =
        "Company name required";
      valid = false;
    }

    if (message.value.trim().length < 10) {
      document.getElementById("messageError").textContent =
        "Minimum 10 characters required";
      valid = false;
    }

    if (valid) {
      window.location.href = "404.html";
    }
  });
}
