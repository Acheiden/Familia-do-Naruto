var reason =[
    "Meu pai",
    "Eu",
    "Minha Mãe"
  ];
  var imagem =[
    "https://pm1.aminoapps.com/6896/f1eab96ad1c059c9bc8ed3b62614e5dbb4b69a77r1-779-1026v2_hq.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmy0CiksQzo5FSf4-JLG6ymws_-NTi34MJEw&s",
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStXRVf1v2Vdg_SXLRXQKBejB8ZMREhXpWAAA&s"  ];
  
  var i=0
  function proxSlide(){
    document.getElementById("reason").innerHTML=reason[i]; 
    document.getElementById("album").src=imagem[i];
    i++;
    if(i>reason.length-1){
      i=0;
    }
  }
  
