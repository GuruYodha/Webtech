let form=document.querySelector("form");
let input=document.querySelectorAll("input"); 
let main=document.querySelector("#main");
//NodeList (input)->[input 0 ,input 1,input 2,input 3,input 4]
//                    name    age     email    pfp     submit
form.addEventListener("submit",function(dets){

    dets.preventDefault();

    // console.log(input);
    
    // console.log(input[0].value,
    //     input[1].value,
    //     input[2].value,
    //     input[3].value);

    //     for(let i = 0; i < input.length - 1; i++){
    //     console.log(input[i].value);
    // }
    let card=document.createElement("div");
    card.classList.add("card");

    let profile=document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    //img.setAttribute("src","C://Users//cepl//Desktop//GWL Training//JavaScript Practice//JavaScript//Events//Soumik.jpeg");
    img.setAttribute("src",input[0].value);

    let h3 = document.createElement("h3");
    h3.textContent=input[1].value;
    //h3.textContent="Soumik Mukherjee";

    let h5 = document.createElement("h5");
    h5.textContent=input[2].value;
    //h5.textContent="Software Developer";

    let p = document.createElement("p");
    //p.textContent="Creating ideas and Developing them with TechnoVision";
    p.textContent=input[3].value;


    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    main.appendChild(card);
    //console.log(card);
    
    input.forEach(function(inp){
        if(inp.type !=="submit"){
        inp.value="";}
    })
});

