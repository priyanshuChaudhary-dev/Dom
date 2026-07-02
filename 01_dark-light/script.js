const btn = document.getElementById("mode");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btn.innerHTML = document.body.classList.contains("dark") ? "Toggle Light Mode" : "Toggle Dark Mode";
});