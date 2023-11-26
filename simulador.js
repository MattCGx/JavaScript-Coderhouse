console.log(
  "inicializacion de la aplicación \n ============================================================"
);

//Defino Variables para datos
let nombre;
let edad;
let minimo;
let maximo;
let estatura;
let miembroClub;
let valorIngresado;
let valorMembresia;
const descuentoMiembros = 20;

// Defino Funciones para seccion datos

const verificarRango = (minimo, maximo, consulta) => {
  valorIngresado = prompt(consulta);
  while (
    valorIngresado > maximo ||
    valorIngresado < minimo ||
    isNaN(valorIngresado) || valorIngresado === null
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
  if (valorMembresia === "si") {
    miembroClub = true;
  } else {
    miembroClub = false;
  }
};

// Tomar datos iniciales del cliente
console.log(
  "Solicita datos al Cliente \n ============================================================"
);

for (let i = 0; i <= 4; i++) {
  let consulta;

  switch (i) {
    case 1:
      valorIngresado = prompt("Por favor ingresa tu nombre");
      while (!isNaN(valorIngresado)||valorIngresado === null) {
        alert("Dato Inválido, vuelva a ingresarlo por favor.");
        valorIngresado = prompt(consulta);
      }
      nombre = valorIngresado.toUpperCase();
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
      consulta = `${nombre}, El descuento aplicado a nuestros afiliados es un ${descuentoMiembros}% sobre el valor total de la atracción \n ==== \n ¿Eres miembro del club JSF? Por favor ingresa "si" o "no" como respuesta`;
      consultarMembresia(consulta);
      console.log(`Miembro club: ${miembroClub}`);
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
console.log(
  "Inicia el menu interactivo \n ============================================================"
);

//Variables Menu
let estMinima;
let edadMinima;
let precioAtraccion;


// Funciones
const chequearEdadEstatura = (estMinima, edadMinima) => {
  if (edad < edadMinima && estatura >= estMinima) {
    alert(
      `Recuerda que las personas de ${edad} años de edad deben entrar acompañadas por un mayor`
    );
    console.log("cumple solo con la altura");
  } else if (edad >= edadMinima && estatura < estMinima) {
    alert(
      `Nuestros sistemas de seguridad no nos permiten dejar ingresar a personas de ${estatura} metros de altura, lamentamos el inconveniente`
    );
    console.log("cumple solo con la edad");
  } else if (edad < edadMinima && estatura < estMinima) {
    alert(
      `Con ${edad} años y ${estatura}mts, no cumples los requisitos minimos de edad y altura, no podemos dejarte ingresar a la atracción, lamentamos el inconveniente`
    );
    console.log("no cumple con requisitos de estatura y edad");
  }else{
    console.log("cumple con ambos requsitos de altura y edad");
  }
};



const informarPrecio = (precioAtraccion, miembroClub) => {
  if (miembroClub) {
    precioAtraccion = precioAtraccion - (precioAtraccion * descuentoMiembros) / 100;
    alert(
      ` El Precio de la Atracción es $${precioAtraccion} ¡ Solo para miembros del club JSF!`
    );
    console.log("Se informa precio con descuento");
  } else {
    alert(` El Precio de la Atracción es $${precioAtraccion}`);
    console.log("Se informa precio normal");
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
      precioAtraccion = 1000;
      alert(
        "CARRUSEL\n ========= \nEmbárcate en un viaje mágico con nuestro Carrusel encantado, donde la nostalgia se encuentra con la alegría. ¡Diversión para todas las edades en cada vuelta! \n ========= \nAltura y edad mínima: ¡Sin restricciones para la diversión ilimitada!"
      );
      console.log("========= \nElegida opción 1, se brinda info sobre carrusel");
      informarPrecio (precioAtraccion, miembroClub);
      break;
    case 2:
      estMinima = 1;
      edadMinima = 8;
      precioAtraccion = 1500;
      alert(
        "AUTOS CHOCADORES\n ========= \n¡Haz rugir los motores y desata el caos controlado en nuestra pista de Autitos Chocadores! Emoción garantizada en cada colisión.\n ========= \n"
      );
      console.log("========= \nElegida opción 2, se brinda info sobre autos chocadores");
      chequearEdadEstatura(estMinima, edadMinima);
      informarPrecio (precioAtraccion, miembroClub);
      break;
    case 3:
      estMinima = 1.2;
      edadMinima = 10;
      precioAtraccion = 1200;
      alert(
        "SILLAS VOLADORAS\n ========= \n¡Eleva tus sueños en nuestras Sillas Voladoras! Experimenta la libertad en el aire con giros suaves y risas interminables.\n ========= \n"
      );
      console.log("========= \nElegida opción 3, se brinda info sobre sillas voladoras");
      chequearEdadEstatura(estMinima, edadMinima);
      informarPrecio (precioAtraccion, miembroClub);
      break;
    case 4:
      estMinima = 1.4;
      edadMinima = 12;
      precioAtraccion = 1800;
      alert(
        "VUELTA AL MUNDO\n ========= \n¡Conquista el mundo desde las alturas en nuestra Vuelta al Mundo giratoria! Una experiencia panorámica única llena de emoción.\n ========= \n"
      );
      console.log("========= \nElegida opción 4, se brinda info sobre vuelta al mundo");
      chequearEdadEstatura(estMinima, edadMinima);
      informarPrecio (precioAtraccion, miembroClub);
      break;
    case 5:
      estMinima = 1.3;
      edadMinima = 10;
      precioAtraccion = 1600;
      alert(
        "TREN DEL TERROR\n ========= \nAdéntrate en el misterio con nuestro Tren del Terror. ¡Sorpresas escalofriantes y risas nerviosas te esperan en cada recorrido!\n ========= \n"
      );
      console.log("========= \nElegida opción 5, se brinda info sobre tren del terror");
      chequearEdadEstatura(estMinima, edadMinima);
      informarPrecio (precioAtraccion, miembroClub);
      break;
    case 6:
      estMinima = 1.5;
      edadMinima = 14;
      precioAtraccion = 2400;
      alert(
        "MONTAÑA RUSA\n ========= \n¡Siente la adrenalina en nuestra Montaña Rusa espectacular! Subidas vertiginosas, bajadas emocionantes y giros que desafían la gravedad.\n ========= \n"
      );
      console.log("========= \nElegida opción 6, se brinda info sobre montaña rusa");
      chequearEdadEstatura(estMinima, edadMinima);
      informarPrecio (precioAtraccion, miembroClub);
      break;
    case 7:
      // Mensaje Despedida y cierre de switch
      alert(
        `Gracias por utilizar nuestro simulador interactivo ${nombre}, lo esperamos pronto en nuestro Parque!`
      );
      console.log("========= \nOpción de Terminar");
      iniciado = false;
      break;
    default:
      alert("Opción inválida. Por favor, selecciona una opción válida.");
      console.log("========= \nOpción invalida en menu");
      break;
  }
}
console.log(
  "Fin del menu interactivo \n ============================================================"
);
