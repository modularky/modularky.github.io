document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    const navLinks = document.querySelectorAll("nav a[data-page]");
  
    function loadPage(page) {
      fetch(`assets/pages/${page}.html`)
        .then((res) => {
          if (!res.ok) throw new Error("Page not found");
          return res.text();
        })
        .then((html) => {
          main.innerHTML = html;
        })
        .catch((err) => {
          main.innerHTML = "<p>Sorry, that page could not be loaded.</p>";
          console.error(err);
        });
    }
  
    // Default page
    loadPage("home");
  
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const page = link.getAttribute("data-page");
        loadPage(page);
      });
    });
  });