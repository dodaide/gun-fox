let tutorialList = document.getElementsByClassName("tutorial_list_container");
let tutorialFilter = document.getElementsByClassName("tuychon");

function tutorialListFilter(index){
    for (let i = 0; i < tutorialList.length; i++) {
        tutorialList[i].style.display = "none";
    }
    tutorialList[index%2].style.display = "block";
}

for (let i = 0; i < tutorialFilter.length; i++) {
    tutorialFilter[i].onclick = function () {
        tutorialListFilter(i);
    }
}

