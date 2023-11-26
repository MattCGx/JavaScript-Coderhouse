console.log("inicializacion de la aplicación \n ============================================================");


//Defino Variables para datos
let nombre;
let edad;
let minimo;
let maximo;
let estatura;
let miembroClub;
let valorIngresado;
let valorMembresia;

// Defino Funciones para seccion datos

const verificarRango = (minimo, maximo, consulta) => {
  valorIngresado = prompt(consulta);
  while (
    valorIngresado > maximo ||
    valorIngresado < minimo ||
    isNaN(valorIngresado)
  ) {
    alert("Dato Inválido, vuelva a ingresarlo por favor.");
    valorIngresado = prompt(consulta);
  }
};

const consultarMembresia = (consulta) => {
  valorMembresia = prompt(consulta).toLowerCase();

  while (valorMembresia !== "no" && valorMembresia !== "si") {
    alert("Dato Inválido, vuelva a ingresarlo por favor.");
    valorMembresia = prompt(consulta).toLowerCase();
  }
  if(valorMembresia === "si"){
    miembroClub = true;
  }else{
    miembroClub = false;
  } 
};

// Tomar datos iniciales del cliente
console.log("Solicita datos al Cliente \n ============================================================");

for (let i = 0; i <= 4; i++) {
  let consulta;

  switch (i) {
    case 1:
      valorIngresado = prompt("Por favor ingresa tu nombre").toUpperCase();
      while (!isNaN(valorIngresado)) {
        alert("Dato Inválido, vuelva a ingresarlo por favor.");
        valorIngresado = prompt(consulta).toUpperCase();
      }
      nombre = valorIngresado;
      break;
    case 2:
      consulta = ` ${nombre} ingresa tu edad en años`;
      minimo = 1;
      maximo = 99;
      verificarRango(minimo, maximo, consulta);
      edad = parseInt(valorIngresado);
      break;
    case 3:
      consulta = `${nombre} ingresa tu altura en metros`;
      minimo = 1;
      maximo = 3.5;
      verificarRango(minimo, maximo, consulta);
      estatura = parseFloat(valorIngresado);
      break;
    case 4:
      consulta = `${nombre} eres miembro del club JSF? por favor ingresa si o no`;
      consultarMembresia(consulta);
      console.log(`Miembro club: ${miembroClub}`)
      break;
    default:
      alert(
        "Bienvenido al menu interactivo de nuestro parque de diversiones JS-Fun"
      );
      break;
  }
}

//Ficha del cliente
console.log(
  ` Ficha de Cliente\n================================\n - Nombre: ${nombre} \n - Edad: ${edad} años.\n - Estatura: ${estatura} mts.\n - Membresía: ${valorMembresia} está afiliado. \n================================`
);

alert(
  `Gracias por los datos proporcionados, ${nombre}.\n Ahora te redirigiremos a nuestro menu de atracciones.\n El Valor de las mismas estará basado en tu ficha de cliente.`
);

// menu interactivo
console.log("Inicia el menu interactivo \n ============================================================");

//Variables Menu
let estMinima;
let edadMinima;
let precioAtraccion;
const descuentoMiembros = 20;
// Funciones
const chequearEdadEstatura = (estMinima, edadMinima) => {
if (edad < edadMinima && estatura < estMinima){

}
};



let iniciado = true;
while (iniciado) {
  let seleccion = parseInt(
    prompt(
      ` ${nombre}, Por favor selecciona una opción para conocer el precio de nuestras atracciones y sus condiciones de uso:\n ================== \n1. Carrusel\n2. Autos Chocadores\n3. Sillas Voladoras\n4. Vuelta al Mundo\n5. Tren del Terror\n6. Montaña Rusa\n7. Terminar`
    )
  );

  switch (seleccion) {
    case 1:
        estMinima = 0;
        edadMinima = 0;
        alert("CARRUSEL\n ========= \nEmbárcate en un viaje mágico con nuestro Carrusel encantado, donde la nostalgia se encuentra con la alegría. ¡Diversión para todas las edades en cada vuelta! \n ========= \nAltura y edad mínima: ¡Sin restricciones para la diversión ilimitada!");
      break;
    case 2:
        estMinima = 0;
        edadMinima = 0;
        alert("AUTITOS CHOCADORES\n ========= \n¡Haz rugir los motores y desata el caos controlado en nuestra pista de Autitos Chocadores! Emoción garantizada en cada colisión.\n ========= \n");
      break;
    case 3:
        estMinima = 0;
        edadMinima = 0;
        alert("SILLAS VOLADORAS\n ========= \n¡Eleva tus sueños en nuestras Sillas Voladoras! Experimenta la libertad en el aire con giros suaves y risas interminables.\n ========= \n");
      break;
    case 4:
        estMinima = 0;
        edadMinima = 0;
        alert("VUELTA AL MUNDO\n ========= \n¡Conquista el mundo desde las alturas en nuestra Vuelta al Mundo giratoria! Una experiencia panorámica única llena de emoción.\n ========= \n");
      break;
    case 5:
        estMinima = 0;
        edadMinima = 0;
        alert("TREN DEL TERROR\n ========= \nAdéntrate en el misterio con nuestro Tren del Terror. ¡Sorpresas escalofriantes y risas nerviosas te esperan en cada recorrido!\n ========= \n");
      break;
    case 6:
        estMinima = 0;
        edadMinima = 0;
        alert("MONTAÑA RUSA\n ========= \n¡Siente la adrenalina en nuestra Montaña Rusa espectacular! Subidas vertiginosas, bajadas emocionantes y giros que desafían la gravedad.\n ========= \n");
      break;
    case 7:
        // Mensaje Despedida y cierre de switch 
      alert(`Gracias por utilizar nuestro simulador interactivo ${nombre}, lo esperamos pronto en nuestro Parque!`);
      iniciado = false;
      break;
    default:
      alert("Opción inválida. Por favor, selecciona una opción válida.");
      break;
  }
}
console.log("Fin del menu interactivo \n ============================================================");





