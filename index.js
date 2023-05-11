let btn=document.getElementById("generate");
function randomNum(){
    let min=document.getElementById("min");
    let max=document.getElementById("max");
    let res=document.getElementById("res");
    let minValue=Number(min.value);
    let maxVlue=Number(max.value);
    let rand = Math.floor(minValue + Math.random() * (maxVlue + 1 - minValue));
    res.innerHTML=rand
}
window.addEventListener("load",randomNum());

btn.addEventListener('click',randomNum);