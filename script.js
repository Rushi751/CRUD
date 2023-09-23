
document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.querySelector("main");
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const url = e.target.getAttribute("href");
            loadPage(url);
        });
    });

    function loadPage(url) {
        fetch(url)
            .then(response => response.text())
            .then(content => {
                mainContent.innerHTML = content;
            })
            .catch(error => {
                console.error("Error loading page:", error);
            });
    }

    
    loadPage("/users");
});
