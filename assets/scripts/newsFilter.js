let newsList = document.getElementsByClassName("news_list_container");
let newsFilter = document.getElementsByClassName("news_filter");

function newsListFilter(index){
    for (let i = 0; i < newsList.length; i++) {
        newsList[i].style.display = "none";
    }
    newsList[index%2].style.display = "block";
}

for (let i = 0; i < newsFilter.length; i++) {
    newsFilter[i].onclick = function () {
        newsListFilter(i);
    }
}

