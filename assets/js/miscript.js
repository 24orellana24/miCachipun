// Creación de variables
let numJuegos = 0
let contEmpate = 0
let contJugador = 0
let contMaquina = 0

// Ingreso de número de juegos, validando que sea un número entero mayor que cero
do {
  numJuegos = parseInt(prompt('Ingrese la cantidad de juegos: '))  
} while (isNaN(numJuegos) || numJuegos <= 0);

// Ciclo para jugar la cantidad de juegos ingresados
for (let i = 1; i <= numJuegos; i++) {
  
  // Ciclo para preguntar la opción del jugador, validando que sea un número entero de 1 a 3
  let opcionJugador = 0
  do {
    opcionJugador = parseInt(prompt('Juego N°' + i + '\nSelecciones un número:\n1 = Piedra\n2 = Papel\n3 = Tijera'))    
  } while (isNaN(opcionJugador) || opcionJugador < 1 || opcionJugador > 3);

  // Asignación aleatoria para la opción de la máquina, la que devuelve un número entero de 1 a 3
  let opcionMaquina = Math.floor(Math.random() * 3) + 1
  console.log(opcionMaquina)

  // Asignación de texto a la opción numérica elegida por el jugador para deplegar en los mensajes
  let jugador = ''
  switch (opcionJugador) {
    case 1:
      jugador = 'Piedra'
      break;
    case 2:
      jugador = 'Papel'
      break;
    case 3:
      jugador = 'Tijera'
      break;
  }

  // Asignación de texto a la opción numérica aleatoria asignada a la máquina para deplegar en los mensajes
  let maquina = ''
  switch (opcionMaquina) {
    case 1:
      maquina = 'Piedra'
      break;
    case 2:
      maquina = 'Papel'
      break;
    case 3:
      maquina = 'Tijera'
      break;
  }

  // Evaluación de los resultados para establecer quien gana el juego
  if (opcionJugador === opcionMaquina) {
    alert('Empate | Maquina ' + maquina + ' | Jugador ' + jugador)
    contEmpate++

  } else if (opcionJugador === 1 && opcionMaquina === 3) {
    alert('Gana Jugador | Maquina ' + maquina + ' | Jugador ' + jugador)
    contJugador++

  } else if (opcionJugador === 2 && opcionMaquina === 1) {
    alert('Gana Jugador | Maquina ' + maquina + ' | Jugador ' + jugador)
    contJugador++

  } else if (opcionJugador === 3 && opcionMaquina === 2) {
    alert('Gana Jugador | Maquina ' + maquina + ' | Jugador ' + jugador)
    contJugador++

  } else {
    alert('Gana Maquina | Maquina ' + maquina + ' | Jugador ' + jugador)
    contMaquina++
  }
}

// Evaluación de los resultados totales para determinar quien es el ganador final
let mensajeGanador = ''
if (contJugador === contMaquina) {
  mensajeGanador = '¡¡¡EMPATE!!!... no hay ganadores'  
} else if (contJugador > contMaquina) {
  mensajeGanador = 'Jugador eres el ganador... ¡¡¡FELICITACIONES!!!'
} else {
  mensajeGanador = 'Máquina eres la ganadora... ¡¡¡FELICITACIONES!!!'
}

// Despliege del mensaje del resumen del juego y del gabador final
alert('El juego ha finalizado, el resultado es el siguiente:\n\nJuegos Evaluados: ' + numJuegos + '\nEmpatados: ' + contEmpate + '\nGanados por el Jugador: ' + contJugador + '\nGanados por la Maquina: ' + contMaquina + '\n\n' + mensajeGanador)