let sel=document.querySelector("select");
let head=document.querySelector("h3");

sel.addEventListener("change",function(dets){
    console.log(dets.target.value);
    head.textContent=`${dets.target.value} Device selected`;
})