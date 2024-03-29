function toggleForm() {
    let show = document.querySelector(".show-account");
    let form = document.getElementById("form");
    if (form.style.display === "none" && show.style.display === "block") {
        form.style.display = "block";
        show.style.display = "none";
    } else {
        form.style.display = "none";
        show.style.display = "block"; // Ajoutez ceci si vous voulez afficher .show-account lorsque vous masquez le formulaire.
    }
}
