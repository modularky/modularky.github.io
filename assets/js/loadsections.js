document.addEventListener("DOMContentLoaded", () => {
    const sectionIds = ["about", "books", "projects", "updates", "contact"];
    const sectionPromises = sectionIds.map(id => {
      return fetch(`pages/${id}.html`)
        .then(res => res.text())
        .then(html => {
          const container = document.createElement("div");
          container.innerHTML = html;
          document.getElementById("main").appendChild(container);
        });
    });
  
    // After all sections are loaded, re-enable anchor scrolling
    Promise.all(sectionPromises).then(() => {
      // Listen for nav link clicks
      document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", e => {
          e.preventDefault();
          const targetId = link.getAttribute("href").substring(1); // remove the '#'
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: "smooth" });
          }
        });
      });
    });
  });