let weaponDes = [
    {
        name: "Giỏ",
        description: "Giỏ Trái Cây là món vũ khí Pow 3 tia, có nhanh nhẹn và may mắn cao, khi sử dụng item buff +2, +2 và Pow thì hiệu ứng đào còn hơn xa Lựu Đạn. Dù vậy, Giỏ Trái Cây vẫn sở hữu điểm yếu là khó Pow."
    },
    {
        name: "Tivi",
        description: "Tủ Lạnh sở hữu 4 chỉ số được chia đều, dễ khảm Châu Báu, có khả năng đào đất khá tốt, trung hòa mọi phương diện. Góc của Tủ Lạnh cao và hẹp tương tự như Lựu Đạn, nếu Gunner biết tận dụng hiệu quả ưu thế của Tủ Lạnh thì hoàn toàn có thể vượt qua các vũ khí khác."
    },
    {
        name: "Phi tiêu",
        description: "Nhanh nhẹn cực cao, hầu như luôn được bắn trước, đôi khi Phi Tiêu còn có thể cướp turn đối thủ một cách bất ngờ. Tuy nhiên khả năng phòng thủ và tấn công đều khiêm tốn, đòi hỏi gunner phải tìm hiểu kỹ và có chiến thuật thi đấu phù hợp với món vũ khí “siêu tốc “ này."
    },
    {
        name: "Sấm sét",
        description: "Hiệu ứng đẹp mắt, may mắn , phá giáp tốt, sát thương xịn, tỉ lệ Crit khá cao, khả năng đào đất có thể so cùng Lựu Đạn - Gunner có thể hạ gục đối thủ chỉ với món vũ khí Sấm Sét này và 1 cú Pow. Tuy nhiên, tính phòng thủ yếu"
    },
    {
        name: "Lựu đạn",
        description: "Mệnh danh là vua đào bới, phòng thủ siêu cường, lại có hiệu ứng Pow tuyệt đẹp, Lựu Đạn chính là niềm tự hào của mọi Gunner hệ đào. Dù sức công phá của Lựu Đạn rất thấp, có góc bắn hẹp nhưng vẫn vô cùng phù hợp với các chiến thuật đào đất"
    }
]
let weapons = document.getElementsByClassName("weapon");
let weaponName = document.querySelector('.weapon_name');
let weaponDescription = document.querySelector('.weapon_description');
let weaponIndex = 2;
function nextWeapon(){
    weapons[weaponIndex].className = weapons[weaponIndex].className.replace(" weapon_selecting", "");
    weaponIndex++;
    if(weaponIndex >= weapons.length - 1){
        weaponIndex = 0;
    }
    weapons[weaponIndex].className += " weapon_selecting";
}
function preWeapon(){
    weapons[weaponIndex].className = weapons[weaponIndex].className.replace(" weapon_selecting", "");
    weaponIndex--;
    if(weaponIndex == -1){
        weaponIndex = weapons.length-2;
    }
    weapons[weaponIndex].className += " weapon_selecting";
}

function changeWeapon(){
    document.querySelector(".weapon_show").src = weapons[weaponIndex].src;
    weaponName.innerHTML = weaponDes[weaponIndex].name;
    weaponDescription.innerHTML = weaponDes[weaponIndex].description;
}

document.querySelector(".weapon_arrow_right").onclick = function(){
    nextWeapon();
    changeWeapon();
}

document.querySelector(".weapon_arrow_left").onclick = function(){
    preWeapon();
    changeWeapon();
}
