console.log("inicializacion del Simulador Interactivo");
console.log("============================================================");
// menu

let iniciado = true;

alert("Bienvenido al menu interactivo");

while (iniciado) {
  let seleccion = parseInt(
    prompt(
      "Selecciona una opción:\n1. opcion 1\n2. opcion 2\n3. opcion 3\n4. opcion 4\n5. opcion5\n6. opcion6\n7. salir"
    )
  );

  // Evaluar la opción seleccionada usando un switch
  switch (seleccion) {
    case 1:
      alert("¡Hola! ¡Bienvenido!");
      break;
    case 2:
      alert("¡Hasta luego! ¡Que tengas un buen día!");
      break;
    case 2:
      alert("¡Hasta luego! ¡Que tengas un buen día!");
      break;
    case 3:
      alert("¡Hasta luego! ¡Que tengas un buen día!");
      break;
    case 4:
      alert("¡Hasta luego! ¡Que tengas un buen día!");
      break;
    case 5:
      alert("¡Hasta luego! ¡Que tengas un buen día!");
      break;
    case 6:
      alert("¡Hasta luego! ¡Que tengas un buen día!");
      break;
    case 7:
        alert("¡Hasta luego! ¡Que tengas un buen día!");
      iniciado = false; 
      break;
    default:
      alert("Opción inválida. Por favor, selecciona una opción válida.");
      break;
  }
}

alert("Gracias por venir lo esperamos pronto");
