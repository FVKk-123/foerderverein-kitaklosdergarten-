document.addEventListener("DOMContentLoaded", function () {
  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav a").forEach(function (link) {
    const href = (link.getAttribute("href") || "").split("#")[0].split("?")[0].toLowerCase();
    if (href === current || (current === "" && href === "index.html")) { link.classList.add("active"); link.setAttribute("aria-current", "page"); }
  });
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
});
