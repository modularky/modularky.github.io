document.addEventListener("DOMContentLoaded", () => {
    const sectionIds = ["about", "books", "projects", "updates", "contact"];
  
    sectionIds.forEach(id => {
      fetch(`pages/${id}.html`)
        .then(res => res.text())
        .then(html => {
          document.getElementById("main").innerHTML += html;
        });
    });
  });