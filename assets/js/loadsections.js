document.addEventListener("DOMContentLoaded", () => {
    const sectionIds = ["about", "books", "projects", "updates", "contact"];
    const main = document.getElementById("main");
  
    Promise.all(
      sectionIds.map(id =>
        fetch(`assets/pages/${id}.html`)
          .then(res => res.text())
          .then(html => {
            const wrapper = document.createElement("div");
            wrapper.innerHTML = html;
            main.appendChild(wrapper);
          })
      )
    ).then(() => {
      // Enable smooth scroll after loading
      document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          const target = document.getElementById(targetId);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        });
      });
    });
  });
  