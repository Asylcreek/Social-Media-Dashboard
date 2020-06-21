const classToAdd = "light";
const selectorsToAddTo = [
    "body",
    ".container-top",
    ".followers",
    ".overview",
    ".header",
];

document
    .querySelector(".dark-mode__toggle")
    .addEventListener("click", (event) => {
        event.target.classList.toggle(classToAdd);

        selectorsToAddTo.forEach((el) => {
            document.querySelector(el).classList.toggle(classToAdd);
        });
    });