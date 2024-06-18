let bar = document.querySelector(".bar");
let list = document.querySelector(".list");
bar.addEventListener("click", function(){
    list.classList.toggle("active");
});