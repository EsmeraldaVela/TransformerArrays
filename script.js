var wrapperEle = document.body.querySelector(".wrapper");
var chrs = [
  {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
  {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
  {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
  {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
  {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
  {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];

  function Transformer(obj) {
    var div = document.createElement("div");
    div.classList.add= ("character");

    
    var nEle= document.createElement("h1");
    nEle.innerHTML="Name: "+obj.name;
    
    var cEle = document.createElement("h2");
    cEle.innerHTML="Class: "+ obj.class.toUpperCase();
    
    
    var vEle = document.createElement("h3");
    vEle.innerHTML="Vehicle: "+ obj.vehicle;
    if(obj.vehicle == "truck"){
      vEle.style.color="blue";
    }else if(obj.vehicle=="tank"){
      vEle.style.color="green";
    }else if(obj.vehicle == "car"){
      vEle.style.color="gold";
    }else{
      vEle.style.color="white";
    }
    
    if(obj.afl=="decepticon"){
     div.className="decepticon";
     var img= document.createElement("img");
     img.src= "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
      
     }
     else{
      div.className="autobot";
      var img= document.createElement("img");
      img.src= "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
      
       }
      
    div.appendChild(nEle);
    div.appendChild(cEle);
    div.appendChild(vEle);
    div.appendChild(img);
    wrapperEle.appendChild(div);
}
for(var i=0; i<chrs.length; i++){
  Transformer(chrs[i]);
}