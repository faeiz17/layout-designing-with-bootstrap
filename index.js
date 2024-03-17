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
  document.addEventListener("fullscreenchange", function () {
    if (document.fullscreenElement === videofullscreen) {
       
        videofullscreen.style.objectFit = "contain";
    } else {
        
        videofullscreen.style.objectFit = "cover"; 
    }
});
}

function toggleAudio(elementID, volumeIconID) {
  videovoice = document.getElementById(elementID);
  videovoice.muted = !videovoice.muted;

  var volumeIcon = document.getElementById(volumeIconID); 

  if (volumeIcon.classList.contains("fa-volume-up")) {
    volumeIcon.classList.remove("fa-volume-up");
    volumeIcon.classList.add("fa-volume-off");
  } else {
    volumeIcon.classList.remove("fa-volume-off");
    volumeIcon.classList.add("fa-volume-up");
  }
  var allVideos = document.getElementsByTagName("video");
  for (var i = 0; i < allVideos.length; i++) {
    if (allVideos[i] !== videovoice) {
      allVideos[i].muted = true;
    }
  }
  let allvoiceicons = document.getElementsByClassName("fa-volume-up");
  console.log(allvoiceicons);
  for(var j = 0 ; j<allvoiceicons.length;j++){
    if(allvoiceicons[j]!==volumeIcon){
      allvoiceicons[j].classList.add("fa-volume-off");
    allvoiceicons[j].classList.remove("fa-volume-up");
    
  }
  }
 
}

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 1500);}
