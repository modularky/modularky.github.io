const sectionList = ["about", "books", "projects", "updates", "contact"];
const main = document.getElementById("main");

sectionList.forEach(name => {
  fetch(`assets/pages/${name}.html`)
    .then(res => res.text())
    .then(html => {
      const section = document.createElement("section");
      section.id = name;
      section.innerHTML = html;
      main.appendChild(section);
    })
    .catch(err => {
      console.error(`Failed to load ${name}.html`, err);
    });
});