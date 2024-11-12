const seeMoreButtons = document.querySelectorAll(".see-more");

seeMoreButtons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("Click jeje");

        document.getElementById("info-" + button.id).classList.toggle("show");

        console.log(document.getElementById("info-" + button.id));
    });
});
