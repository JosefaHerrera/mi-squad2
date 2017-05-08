//objeto constructor
function MiSquad(nombre,apellido,edad,hobby1,hobby2,hobby3,imagen){
    this.nombre =nombre;
    this.apellido = apellido;
    this.edad =edad;
    this.hobby1 = hobby1;
    this.hobby2 = hobby2;
    this.hobby3 = hobby3;
    this.imagen = imagen;
};
var alumna1 = new MiSquad("Josefa","Herrera",21,"bailar pop","leer","estudiar","http://vignette4.wikia.nocookie.net/lossimpson/images/b/bc/Samantha_Stanky.png/revision/latest?cb=20090801152755&path-prefix=es");
var alumna2 = new MiSquad("Anayn", "pavez", 27, "dibujar", "pasteleria", "y andar en bici","http://vignette3.wikia.nocookie.net/lossimpson/images/b/bb/Jessica_Lovejoy.gif/revision/latest?cb=20090805020636&path-prefix=es");
var alumna3 = new MiSquad("Muriel", "bahamondes", 25 , "fumar hierba", "jugar pool", "navegar en internet xd","http://vignette3.wikia.nocookie.net/lossimpson/images/5/53/Juliet.png/revision/latest?cb=20091117163823&path-prefix=es");
var alumna4 = new MiSquad("simona", "ulloa", 29, "ir a laboratoria", "comprar cosas en laboratorias", "los stickers de laboratoria","http://vignette3.wikia.nocookie.net/lossimpson/images/d/d2/Gina_Vendetti.png/revision/latest?cb=20110720221850&path-prefix=es");
var alumna5 = new MiSquad("Anais", "Araya", 19, "ver memes","stickers de laboratoria","programar","http://vignette1.wikia.nocookie.net/lossimpson/images/e/e8/Alex_Whitney.png/revision/latest?cb=20110720223433&path-prefix=es");
var alumna6 = new MiSquad("Carolina","Quintana",21,"codear","comer","ir a laboratoria","http://vignette2.wikia.nocookie.net/lossimpson/images/7/75/Alaska_Nebraska.png/revision/latest?cb=20091006164252&path-prefix=es");
var alumna7 = new MiSquad("Monica","Monardes",19,"stickers","gatos","perros","http://vignette3.wikia.nocookie.net/simpsons/images/3/37/Erin_%28Summer_of_4_Ft_2%29.png/revision/latest?cb=20141027013933");
var alumna8 = new MiSquad("Camila","Pino",23,"Jugar Cartas","Jugar xbox","Jugar PC","http://vignette3.wikia.nocookie.net/lossimpson/images/8/89/Darcy.png/revision/latest?cb=20090807220806&path-prefix=es");
//OBTENER OBJETO CON EL ID ESPECIFCADO ENTRE COMILLAS "", EN ESTE CASO LISTA
var resultado1 = document.getElementById("lista1");
var resultado2 = document.getElementById("lista2");
var resultado3 = document.getElementById("lista3");
var resultado4 = document.getElementById("lista4");
var resultado5 = document.getElementById("lista5");
var resultado6 = document.getElementById("lista6");
var resultado7 = document.getElementById("lista7");
var resultado8 = document.getElementById("lista8");
//INNERHTML REMPLAZA EL VALOR DEL OBJETO OBTENIDO POR EL VALOR QUE SE LE ASIGNA
document.getElementById("nombre").innerHTML = ("<b> Squad: </b>" + "A-TÓ-MI-CO !");//esto es un descubrimiento
resultado1.innerHTML = muestra(alumna1);
resultado2.innerHTML = muestra(alumna2);
resultado3.innerHTML = muestra(alumna3);
resultado4.innerHTML = muestra(alumna4);
resultado5.innerHTML = muestra(alumna5);
resultado6.innerHTML = muestra(alumna6);
resultado7.innerHTML = muestra(alumna7);
resultado8.innerHTML = muestra(alumna8);
/*
Una lista sin ordenar 
<ul> 
<li>Uno</li>  -> Complemento de UL es para ordenar la lista. NO NECESITO BR, PORQUE ES UNA LISTA
<li>Dos</li> 
<li>Tres</li> 
</ul> 
*/
function muestra(cumpa){
        var mostrar = ("<table>"+"<img src='"+cumpa.imagen+"' width='100' heigth='100'><br><b>Nombre: </b>"+ cumpa.nombre +"<br>" + "<b>Apellido:</b> " 
            + cumpa.apellido+ "<br>" + "<b>Edad:</b> " + cumpa.edad + "<br>" + "<b>Hobbies:</b> <ul>" 
            + "<li>" +cumpa.hobby1 + "</li> <li>"+ cumpa.hobby2 + "</li> <li>" + cumpa.hobby3 + 
            "</li> </ul>"+"<textarea rows=5 cols=25></textarea>"+"<br>"+"<button>comentar</button>"+"<button>me gusta</button>");
        return mostrar;
        };

