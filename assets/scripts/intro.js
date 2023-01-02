let tabTitles = document.querySelectorAll('.tab .tab-item');
let tabContents = document.querySelectorAll('.tab-content .grid.wide');
// console.log(tabTitles);
// console.log(tabContents);
for (let i = 0; i < tabTitles.length; i++) {
    tabTitles[i].onclick = function() {
        for (let j = 0; j < tabTitles.length; j++) {
            if (tabTitles[j].classList.contains('tab-item-active')) {
                tabTitles[j].classList.remove('tab-item-active')
            }
        }
        for (let j = 0; j < tabContents.length; j++) {
            if (tabContents[j].classList.contains('tab-content-active')) {
                tabContents[j].classList.remove('tab-content-active')
            }
        }
        tabTitles[i].classList.add('tab-item-active');
        tabContents[i].classList.add('tab-content-active');
    }
}