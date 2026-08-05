/*==================================================
                DOM ELEMENTS
==================================================*/

const dashboardContent = document.getElementById("dashboardContent");

const pageTitle = document.getElementById("pageTitle");

const userEmail = document.getElementById("userEmail");

const profileEmail = document.getElementById("profileEmail");

const sidebar = document.querySelector(".sidebar");

const menuToggle = document.getElementById("menuToggle");

const menuLinks = document.querySelectorAll(".menu a");

const logoutBtn = document.querySelector(".logout-btn");

const closeSidebar = document.getElementById("closeSidebar");

/*==================================================
                USER EMAIL
==================================================*/

// const email = localStorage.getItem("userEmail") || "client@stackly.com";

// if (userEmail) {
//   userEmail.textContent = email;
// }

// if (profileEmail) {
//   profileEmail.textContent = email;
// }

/*==================================================
                DASHBOARD PAGES
==================================================*/

const pages = {
  dashboard: `

<div class="welcome-card">

    <div>

        <h1>Welcome Back 👋</h1>

        <p>

            Manage your projects,
            tasks, invoices and
            messages from one place.

        </p>

    </div>

    <button class="primary-btn" onclick="window.location.href='404.html'">

        View Projects

    </button>

</div>

<div class="stats-grid">

    <div class="stat-card">

        <i class="fa-solid fa-folder-open"></i>

        <h2>08</h2>

        <p>Projects</p>

    </div>

    <div class="stat-card">

        <i class="fa-solid fa-list-check"></i>

        <h2>18</h2>

        <p>Tasks</p>

    </div>

    <div class="stat-card">

        <i class="fa-solid fa-circle-check"></i>

        <h2>145</h2>

        <p>Completed</p>

    </div>

    <div class="stat-card">

        <i class="fa-solid fa-file-invoice-dollar"></i>

        <h2>05</h2>

        <p>Invoices</p>

    </div>

</div>

`,

  projects: `

<div class="table-card">

<div class="card-header">

<h3>

My Projects

</h3>

</div>

<table>

<thead>

<tr>

<th>Name</th>

<th>Status</th>

<th>Progress</th>

<th>Deadline</th>

</tr>

</thead>

<tbody>

<tr>

<td>Corporate Website</td>

<td>Running</td>

<td>80%</td>

<td>12 Aug</td>

</tr>

<tr>

<td>E-Commerce</td>

<td>Pending</td>

<td>55%</td>

<td>19 Aug</td>

</tr>

<tr>

<td>CRM Dashboard</td>

<td>Completed</td>

<td>100%</td>

<td>05 Jul</td>

</tr>

</tbody>

</table>

</div>

`,

  tasks: `

<div class="table-card">

<div class="card-header">

<h3>

Tasks

</h3>

</div>

<ul class="task-list">

<li>

<span>

Create Dashboard UI

</span>

<strong>

Today

</strong>

</li>

<li>

<span>

API Integration

</span>

<strong>

Tomorrow

</strong>

</li>

<li>

<span>

Testing

</span>

<strong>

Friday

</strong>

</li>

</ul>

</div>

`,

  invoices: `

<div class="table-card">

    <div class="card-header">

        <h3>Invoices</h3>

    </div>

    <table>

        <thead>

            <tr>

                <th>Invoice</th>

                <th>Amount</th>

                <th>Status</th>

                <th>Date</th>

            </tr>

        </thead>

        <tbody>

            <tr>

                <td>INV-1001</td>

                <td>₹12,000</td>

                <td>Paid</td>

                <td>12 Jul 2026</td>

            </tr>

            <tr>

                <td>INV-1002</td>

                <td>₹8,500</td>

                <td>Pending</td>

                <td>22 Jul 2026</td>

            </tr>

            <tr>

                <td>INV-1003</td>

                <td>₹15,000</td>

                <td>Paid</td>

                <td>30 Jul 2026</td>

            </tr>

        </tbody>

    </table>

</div>

`,

  messages: `

<div class="table-card">

    <div class="card-header">

        <h3>Messages</h3>

    </div>

    <ul class="task-list">

        <li>

            <span>Project Review Meeting</span>

            <strong>Today</strong>

        </li>

        <li>

            <span>Invoice Approved</span>

            <strong>Yesterday</strong>

        </li>

        <li>

            <span>Design Feedback Received</span>

            <strong>2 Days Ago</strong>

        </li>

    </ul>

</div>

`,

  profile: `

<div class="form-card">

    <div class="form-group">

        <label>Full Name</label>

        <input
            type="text"
            value="Client User">

    </div>

    <div class="form-group">

        <label>Email</label>

        <input
            type="email"
           

    </div>

    <div class="form-group">

        <label>Phone</label>

        <input
            type="text"
            value="+91 9876543210">

    </div>

    <button class="primary-btn" onclick="window.location.href='404.html'">

        Save Profile

    </button>

</div>

`,

  settings: `

<div class="form-card">

    <div class="form-group">

        <label>New Password</label>

        <input
            type="password"
            placeholder="********">

    </div>

    <div class="form-group">

        <label>Language</label>

        <select>

            <option>English</option>

            <option>தமிழ்</option>

            <option>తెలుగు</option>

        </select>

    </div>

    <div class="form-group">

        <label>Email Notifications</label>

        <select>

            <option>Enabled</option>

            <option>Disabled</option>

        </select>

    </div>

    <button class="primary-btn" onclick="window.location.href='404.html'">

        Save Settings

    </button>

</div>

`,
};

/*==================================================
                LOAD PAGE
==================================================*/

function loadPage(pageName, titleText) {
  dashboardContent.innerHTML = pages[pageName] || pages.dashboard;

  pageTitle.textContent = titleText;
}

/*==================================================
            DEFAULT PAGE
==================================================*/

loadPage("dashboard", "Client Dashboard");

/*==================================================
            SIDEBAR NAVIGATION
==================================================*/

menuLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelectorAll(".menu li").forEach((item) => {
      item.classList.remove("active");
    });

    this.parentElement.classList.add("active");

    const page = this.dataset.page;

    const title = this.querySelector("span")
      ? this.querySelector("span").textContent
      : this.textContent.trim();

    loadPage(page, title);

    if (window.innerWidth <= 768) {
      sidebar.classList.remove("active");
    }
  });
});

/*==================================================
            MOBILE SIDEBAR
==================================================*/

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
}

if (closeSidebar) {
  closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
}

/*==================================================
                LOGOUT
==================================================*/

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("userEmail");

    window.location.href = "signup.html";
  });
}
