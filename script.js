document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll(".card a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            console.log("Resource opened:", link.textContent);
        });
    });

    console.log("AI Marketing Toolkit loaded successfully.");
});
