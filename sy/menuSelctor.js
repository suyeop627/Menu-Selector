

var menu = [ "분식", "횟집", "모밀", "햄버거", "밥버거", "중국집", "갈비탕", "편의점"]

function select(){

    var dice = parseInt((Math.random() * 8));  

    var Selected =  menu[dice]


document.getElementById("result").innerHTML= Selected
}
