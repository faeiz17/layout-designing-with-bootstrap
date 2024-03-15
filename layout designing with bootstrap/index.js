function openNav() {
  document.getElementById("side-menu").style.width = "200px";
}
let x = document.getElementById("close");
x.onclick = closeNav;
function closeNav() {
  if (x) {
    document.getElementById("side-menu").style.width = "0px";
  }
}

function videofullerscreen(getElementById) {
   let videofullscreen = document.getElementById(getElementById);
  videofullscreen.requestFullscreen();
}

function toggleAudio(elementID) {
  videovoice = document.getElementById(elementID);
  videovoice.muted = !videovoice.muted;

  let volumeIcon = document.getElementById("volumeIcon");

  if (volumeIcon.classList.contains("fa-volume-up")) {
    volumeIcon.classList.remove("fa-volume-up");
    volumeIcon.classList.add("fa-volume-off");
  } else {
    volumeIcon.classList.remove("fa-volume-off");
    volumeIcon.classList.add("fa-volume-up");
  }
}
