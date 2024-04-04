let nextdom=document.getElementById("next");
let prevdom=document.getElementById("prev");
let carsouldom=document.querySelector(".carsoul");
let listdom=document.querySelector(".carsoul .list");
let thumbdom=document.querySelector(".carsoul .thumb");
nextdom.onclick=function(){
    showslider('next');
}
prevdom.onclick=function(){
    showslider('prev')
}
function showslider(type){
    let itemslider=document.querySelectorAll('.carsoul .list .item');
    let itemthumb=document.querySelectorAll(".carsoul .thumb .item");

    if(type=='next'){
        listdom.append(itemslider[0]);
        thumbdom.append(itemthumb[0]);
    }
    else{
        let posilastitem= 3;
        listdom.prepend(itemslider[3]);
        thumbdom.prepend(itemthumb[3]);
    }
}