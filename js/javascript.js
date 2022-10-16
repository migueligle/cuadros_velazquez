let brendaBtn = document.getElementById("brenda");
let meninasBtn = document.getElementById("meninas");
let vulcanoBtn = document.getElementById("vulcano");
let inocencioBtn = document.getElementById("inocencio");
let venusBtn = document.getElementById("venus");

brendaBtn.onclick = function(){
  cambio.src = "img/breda.jpg"
  cambi.src = "img/breda.jpg"
  document.getElementById("titulo").innerHTML = "LA RENDICIÓN <br> DE BREDA"; 
  document.getElementById("año").innerHTML = "1634-35"; 
  document.getElementById("precio").innerHTML = "<b>380€</b>"; 
  document.getElementById("dimen").innerHTML = "Réplica del cuadro en colores originales y tamaño 150 x 80cm"; 
      
  }
  meninasBtn.onclick = function(){
      cambio.src = "img/meninas.jpg"
      cambi.src = "img/meninas.jpg"
      document.getElementById("titulo").innerHTML = "LAS MENINAS"; 
      document.getElementById("año").innerHTML = "1616-1660"; 
      document.getElementById("precio").innerHTML = "<b>1250€</b>"; 
      document.getElementById("dimen").innerHTML = "Réplica del cuadro en colores originales y tamaño 400 x 350cm"; 
    
      }
      vulcanoBtn.onclick = function(){
          cambio.src = "img/vulcano.jpg"
          cambi.src = "img/vulcano.jpg"
          document.getElementById("titulo").innerHTML = "LA FRAGUA DE <br> VULCANO";  
            document.getElementById("año").innerHTML = "1630";  
            document.getElementById("precio").innerHTML = "<b>375€</b>"; 
            document.getElementById("dimen").innerHTML = "Réplica del cuadro en colores originales y tamaño 170 X 120cm"
          }
          inocencioBtn.onclick = function(){
              cambio.src = "img/inocencio.jpg"
              cambi.src = "img/inocencio.jpg"
                document.getElementById("titulo").innerHTML = "EL PAPA INOCENCIO  X";  
                document.getElementById("año").innerHTML = "1650"; 
                document.getElementById("precio").innerHTML = " <b>280€</b>"; 
                document.getElementById("dimen").innerHTML = "Réplica del cuadro en colores originales y tamaño  80 X 140cm"; 
              }
              venusBtn.onclick = function(){
                  cambio.src = "img/venus.jpg"
                  cambi.src = "img/venus.jpg"
                  document.getElementById("titulo").innerHTML = "VENUS DEL ESPEJO"; 
                  document.getElementById("año").innerHTML = "1644-1648";
                  document.getElementById("precio").innerHTML = "<b>432€</b>"; 
                  document.getElementById("dimen").innerHTML = "Réplica del cuadro en colores originales y tamaño 230 X 150cm"    
                  }

   
                const fulimgb = document.getElementById("fulimgb")
                cambi =document.getElementById("cambi")

                function openfullimg(reference){
                  fulimgb.style.display ="flex";
                  fulimgb.src =reference
                }
                function colseImg(){
                  fulimgb.style.display = "none";
                }