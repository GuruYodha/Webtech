let btn=document.querySelector("#btn");
let fileinp=document.querySelector("#fileinp");

btn.addEventListener("click",function(){
    fileinp.click();
});

fileinp.addEventListener("change",function(dets){
    console.log(dets);
    
    // console.log(dets.target.files[0].name);

    const file=dets.target.files[0];//array
    if(file){
    btn.textContent=file.name;
    }
})