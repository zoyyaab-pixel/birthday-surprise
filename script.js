const envelope = document.getElementById("envelope");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const music = document.getElementById("music");

envelope.addEventListener("click", () => {
    page1.style.display = "none";
    page2.style.display = "flex";

    music.play();
}); 