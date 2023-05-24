const selectElement = (element) =>document.querySelector(element);

selectElement('.menu').addEventListener("click", () => {
    selectElement('.mobile_menu').classList.toggle('active');
});