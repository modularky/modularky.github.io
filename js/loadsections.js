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

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".clickable-book").forEach((img) => {
      img.addEventListener("click", function () {
        const targetPage = this.getAttribute("data-page");
        // Replace this with your own logic to switch pages
        navigateToPage(targetPage);
      });
    });
  
    function navigateToPage(pageName) {
      // Example logic: load different content or redirect
      console.log("Navigating to:", pageName);
      // Example: you might call some router or change content
      // window.location.href = `${pageName}.html`; // if using actual files
      // OR dynamically load content if you're using a single page setup
    }
  });