let libraryFilters = document.getElementsByClassName("library_filter");
let librarys = document.getElementsByClassName("library");

function libraryFilterActive(index){
    for(let i = 0; i < libraryFilters.length; i++){
        libraryFilters[i].className = libraryFilters[i].className.replace(" library_filter_active", "");
        librarys[i].style.display = "none";
    }
    libraryFilters[index].className += " library_filter_active";
    librarys[index].style.display = "block";
}

for (let i = 0; i < libraryFilters.length; i++) {
    libraryFilters[i].onclick = function(){
        libraryFilterActive(i);
    }
}

let modal = document.getElementById("modal");
let modalImg = document.querySelector(".modal_img");
let modalClose = document.querySelector(".modal_close");
let libraryImgs = document.getElementsByClassName("library_img");
modal.onclick = function(){
    modal.style.display = "none";
}
modalImg.onclick = function(event){
    event.stopPropagation();
}
function enableModal(){
    for (let i = 0; i < libraryImgs.length; i++) {
        libraryImgs[i].onclick = function(){
            modal.style.display = "block";
            modalImg.src = libraryImgs[i].src;
        }
    }
}
enableModal();

