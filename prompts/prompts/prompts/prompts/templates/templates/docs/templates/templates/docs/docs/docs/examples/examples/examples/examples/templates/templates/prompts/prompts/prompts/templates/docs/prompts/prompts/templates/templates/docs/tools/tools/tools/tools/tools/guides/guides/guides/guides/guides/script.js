document.addEventListener("DOMContentLoaded", function () {

    const resourceLinks = document.querySelectorAll(".card a");

    resourceLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            console.log("Resource opened:", link.textContent);
        });
    });

    console.log("AI Marketing Toolkit loaded successfully.");
});
