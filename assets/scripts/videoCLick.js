let videoContainer = document.getElementById("videoContainer");
let modalVideo = document.querySelector(".modal_video");
let videoClose = document.querySelector(".videoClose");
let libraryVideos = document.getElementsByClassName("library_video");
videoContainer.onclick = function(){
    videoContainer.style.display = "none";
    modalVideo.src = "";
}
modalVideo.onclick = function(event){
    event.stopPropagation();
}
function enableVideoContainer(){
    for (let i = 0; i < libraryVideos.length; i++) {
        libraryVideos[i].onclick = function(){
            videoContainer.style.display = "block";
            modalVideo.src = libraryVideos[i].getAttribute("data-if");
        }
    }
}
enableVideoContainer();

