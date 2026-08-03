/*========================================
  ELEMENTS
========================================*/

const content = document.getElementById("dashboardContent");
const pageTitle = document.getElementById("pageTitle");
const userEmail = document.getElementById("userEmail");

const menuLinks = document.querySelectorAll(".menu a");
const sidebar = document.querySelector(".sidebar");
const menuToggle = document.getElementById("menuToggle");
const logoutBtn = document.querySelector(".logout-btn");

const navMenuToggle = document.getElementById("navMenuToggle");
const navMobileMenu = document.getElementById("navMobileMenu");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.getElementById("mobileOverlay");

const isDashboardPage = content && pageTitle;

/*========================================
  USER EMAIL
========================================*/

const email = localStorage.getItem("userEmail");

if (isDashboardPage && email && userEmail) {
  userEmail.textContent = email;
}

/*========================================
  PAGES
========================================*/

const pages = {
  overview: `

<div class="welcome-card">

<div>

<h1>Operations Control Center</h1>

<p>
Monitor projects, manage clients and analyze business performance.
</p>

</div>

<button class="primary-btn">

+ Create Project

</button>

</div>

<div class="stats-grid">

<div class="stat-card">

<h2>48</h2>

<p>Total Projects</p>

</div>

<div class="stat-card">

<h2>126</h2>

<p>Clients</p>

</div>

<div class="stat-card">

<h2>324</h2>

<p>Tasks</p>

</div>

<div class="stat-card">

<h2>92%</h2>

<p>Performance</p>

</div>

</div>

`,

  projects: `

<div class="page-header">

    <h2>Project Management</h2>

    <button class="primary-btn">
        + New Project
    </button>

</div>

<div class="stats-grid">

    <div class="stat-card">

        <h2>18</h2>

        <p>Running Projects</p>

    </div>

    <div class="stat-card">

        <h2>7</h2>

        <p>Completed</p>

    </div>

    <div class="stat-card">

        <h2>4</h2>

        <p>Pending Review</p>

    </div>

    <div class="stat-card">

        <h2>96%</h2>

        <p>Success Rate</p>

    </div>

</div>

`,

  clients: `

<div class="page-header">

<h2>Client Management</h2>

<button class="primary-btn">

+ Add Client

</button>

</div>

<div class="stats-grid">

<div class="stat-card">

<h2>126</h2>

<p>Total Clients</p>

</div>

<div class="stat-card">

<h2>98</h2>

<p>Active Clients</p>

</div>

<div class="stat-card">

<h2>15</h2>

<p>New This Month</p>

</div>

<div class="stat-card">

<h2>4.9★</h2>

<p>Client Rating</p>

</div>

</div>

`,

  reports: `

<div class="page-header">

<h2>Business Reports</h2>

<button class="primary-btn">

Download PDF

</button>

</div>

<div class="stats-grid">

<div class="stat-card">

<h2>$48K</h2>

<p>Revenue</p>

</div>

<div class="stat-card">

<h2>320</h2>

<p>Orders</p>

</div>

<div class="stat-card">

<h2>185</h2>

<p>Invoices</p>

</div>

<div class="stat-card">

<h2>82%</h2>

<p>Growth</p>

</div>

</div>

`,

  settings: `

<div class="page-header">

<h2>Account Settings</h2>

<button class="primary-btn">

Save Changes

</button>

</div>

<div class="settings-box">

<div>

<label>Full Name</label>

<input type="text" value="Administrator">

</div>

<div>

<label>Email</label>

<input type="email" value="admin@stackly.com">

</div>

<div>

<label>Password</label>

<input type="password" value="********">

</div>

</div>

`,
};

/*========================================
  LOAD PAGE
========================================*/

function loadPage(pageName, title) {
  pageTitle.textContent = title;

  content.innerHTML = pages[pageName];
}

/*========================================
  DEFAULT PAGE
========================================*/

if (isDashboardPage) {
  loadPage("overview", "Dashboard Overview");

  /*========================================
    SIDEBAR MENU
  ========================================*/

  menuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(".menu .active")?.classList.remove("active");

      this.parentElement.classList.add("active");

      const page = this.dataset.page;

      const title = this.querySelector("span").textContent;

      loadPage(page, title);

      if (window.innerWidth <= 768) {
        sidebar.classList.remove("active");
      }
    });
  });

  /*========================================
    MOBILE SIDEBAR
  ========================================*/

  menuToggle?.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

  /*========================================
    LOGOUT
  ========================================*/

  logoutBtn?.addEventListener("click", () => {
    localStorage.removeItem("userEmail");

    window.location.href = "login.html";
  });
}

if (!isDashboardPage) {
  document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.onclick = () => {
      navMobileMenu?.classList.remove("active");

      overlay?.classList.remove("active");
    };
  });
}

if (navMenuToggle && navMobileMenu && closeMenu && overlay) {
  navMenuToggle.onclick = () => {
    navMobileMenu.classList.add("active");

    overlay.classList.add("active");
  };

  closeMenu.onclick = () => {
    navMobileMenu.classList.remove("active");

    overlay.classList.remove("active");
  };

  overlay.onclick = () => {
    navMobileMenu.classList.remove("active");

    overlay.classList.remove("active");
  };

  document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.onclick = () => {
      navMobileMenu.classList.remove("active");

      overlay.classList.remove("active");
    };
  });
}

/*====================================
        NEWSLETTER VALIDATION
====================================*/

const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {
  const newsletterEmail = document.getElementById("newsletterEmail");

  const newsletterError = document.getElementById("newsletterError");

  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = newsletterEmail.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" || !emailRegex.test(email)) {
      newsletterError.style.display = "block";

      newsletterError.textContent = "Please enter a valid email address.";

      return;
    }

    newsletterError.style.display = "none";

    window.location.href = "404.html";
  });
}
