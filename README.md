# Practica Aplicación  Web Velazquez
## creación  de el entorno git 
para la creación del entorno hemos creado un directorio con todos los arcchivos:
1. html  que se llamará ```index.html```
2. css con su respectivo nombre ```style.css```
3. javascript en el que lo hemos llamado ```javascript.js```
4. y por ultimo un archivo llamado README para su explicacion que es este archivo que se esta visualizando . que se llamará ```README.md```

 
para  la creacion del repositorio git hemos tenido que ir al directorio donde estamos trabajando y abrir una terminal  y escribir los siguientes comandos:

para iniciar el repositorio:
```git
git init
```
despues tendremos que crear el archivo ```.gitignore``` y dentro de el tendremos que  indicar los metadatos que queramos ocultar por ejemplo uno de ellos seria ```.idea/```

Una vez realizado esto ya estamos listos para empezar a trabajar!!

para empezar se a realizado  en la etiqueta ``` <head> ``` la inserccion de nuestros documentos css y javascript y la insercción  de las fuentes de texto proporcionadas por google_fonts.

En segundo lugar se a creado la estructura en  html en la que hemos introduccido  un ```<div>``` para el titulo donde se le añade un  un ```<h1>``` y despues un ```<div>``` contenedor y dentro de el tres  en los que seran:
- la barra de navegacion lateral 
- imagen del cuadro
- texto informativo y  boton de compra

en el archivo css se a introduccido ,el posicionamiento de la estructura css, y sus estilos  añadiendo a cada div un ```background-color```, para toda su maquetación.

una vez realizado esto ,nos iremos a la terminal para realizar un commit y sus comandos a realizar son :
- ``` git status``` para su comprobación, nos mostrará lo que no esta añadido o lo que esta modificado

- ``` git add + fichero ``` para agregar a la preparacion los ficheros a introduccir 

- ``` git commit -m "comentario"``` este comando sirve para realizar una confirmación de todos los archivos ,y subirlos a git, pero el argumento  ``` -m``` nos sirve para indicar un comentario al commit ,para poder trabajar posteriormente con ello 

### css:

en este caso ,yo realizé  esta pagina  al principio con ```position```  y ```overflow:hidden``` para que el padre contenga al hijo  pero al ver el resultado busque otra alternativa y esa fue **FlexBox**  con sus propiedades
```css
display:fex;
flex-direction: row;
```
Realizé otra vez su estructura  ,y empece a añadir las imagenes de la barra lateral ,que para que tuviera un scroll introducí en el css ```oveflow:scroll;```.

los textos  y el boton les agregre de este modo:
```html
<p> texto</<p>
<p> <strong>  texto negrita </strong> </p>
<button> Comprar </button>
```
una vez realizado toda la maquetación, y su contendio me pase a realizar los ultimos preparativos con css añadiendo colores, margenes etc...

## Javascript
A la hora de realizar javascrpit **estuve documentandome** un poco por algunas paginas webs empapandome un poco como se realiza **ya que Javascrpit no se a visto aun en clase** 
y pude realizarlo con exito por ultimo vamos a explicar un poquito como lo realice :

### realización javascript
### realización javascript
para la realización, de cuando clickemos a una imagen  en la barra de navegación lateral,y  se nos ponga en grande en el lado derecho
  hemos creado variables let, en las que les indicamos el nombre con el atributo **Btn** ,y agregamos el ```.getElementById``` ,para que nos asigne el boton al la id indicada ,de cada imagen en la barra de navegacion 
despues ,crearemos  una funcion con cada boton en la que le añadimos  el ``` onclick ``` y dentro de la funcion indicamos la id de la imagen , que en este caso es cambiar  el atributo src , y por ultimo de este apartado tendremos que cambiar el texto con esta sintaxis:
```javascript
document.getElementById("titulo").innerHTML = "LAS MENINAS"; 

asi es como quedaria nuestro codigo :

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
```

### realizacion con javascript  ampliar una imagen para visualizar

para ello hemos tenido que duplicar la imagen, e insertar una id y una clase, en la que le hemos proporcionado  estilos de css para poder  escurecer el fondo ,para ampliar la imagen y que este centrada , a parte de eso hemos añadido un span ,en el que le hemos añadido un poco de javascript
```   <span onclick="colseImg()">x</span> ``` para poder realizar  una x para cerrar la ventana 
 despues ,creamos una constante con la id de el ``` <div> ``` ,que contiene la imagen  y que la id __cambi__ sea igual a el elemento __cambi__, posteriormente se a creado una funcion  que se llama openfullimg ,y cambiamos con la id del ``` <div>```  cambiar el ``` display:flex;```  y otra funcion  con la __id__ de el span para quitar esta animacion en la que le cambiemos el ``` display```  a ``` none```  .
 

























