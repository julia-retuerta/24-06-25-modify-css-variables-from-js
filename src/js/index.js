// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

//coge todo lo que hay en el root de css
/* const rootStyles = document.documentElement.style;

const inputColorElement = document.getElementById('input-color');

inputColorElement.addEventListener('input', event => {
  rootStyles.setProperty('--primary-color', event.target.value);
});

rootStyles.setProperty('--primary-color', 'green'); */

//
//
//

// EJERCICIOS VARIABLES CSS

/* - Crea un div de color rojo y colócalo en la parte superior izquierda de tu web. Haz que tu web tenga un min-height de 500vh para generar scroll. El div deberá sincronizarse con el scroll, si estás arriba del todo medirá 0 de ancho y si está abajo del todo medirá el 100%, según vayas haciendo scroll el div deberá ir creciendo o encogiendo en función de si subes o bajas. */

// buscar la relación entre el ancho y el scroll, regla de 3, si abajo mide tanto...
// Añadir un evento que escuche el scroll de la página
// Calcular la cantidad de desplazamiento vertical

// Desplazamiento vertical (scrollY)
// Altura del documento (scrollHeight -> 4520)
// Altura de la Ventana (innerHeight)

const scrollRectangleElement = document.getElementById('scroll-rectangle');

const synchronizedScrollAndDiv = event => {
  console.log(event);
};

window.addEventListener('scroll', synchronizedScrollAndDiv);

//
//
//

/* - Añade un h1 al ejercicio anterior que te diga cuantos px te has desplazado. */

//
//
//

/* - Crea dos botones en tu web para que al pulsarlos generen un color aleatorio para el body y se aplique. Haz una función para generarlo en RGB y otra para generarlo en hexadecimal y ejecuta cada una desde un botón */

const rgbButtonElement = document.getElementById('rgb-button');
const hexButtonElement = document.getElementById('hex-button');

const randomRgb = () => {
  const randomNumberR = Math.floor(Math.random() * 256);
  const randomNumberG = Math.floor(Math.random() * 256);
  const randomNumberB = Math.floor(Math.random() * 256);
  return `rgb(${randomNumberR}, ${randomNumberG}, ${randomNumberB})`;
};

const applyRgbToBody = () => {
  const randomColorRgb = randomRgb();
  const rootStyles = document.documentElement.style;
  rootStyles.setProperty('--body-color', randomColorRgb);
};

rgbButtonElement.addEventListener('click', applyRgbToBody);

const randomHex = () => {
  const characters = '0123456789ABCDEF';
  let hexColor = '#';

  for (let i = 0; i < 6; i++) {
    hexColor = hexColor + characters[Math.floor(Math.random() * characters.length)];
  }
  return hexColor;
};

const applyHexToBody = () => {
  const randomColorHex = randomHex();
  const rootStyles = document.documentElement.style;
  rootStyles.setProperty('--body-color', randomColorHex);
};

hexButtonElement.addEventListener('click', applyHexToBody);

//
//
//

/* - Crea un div de 20px x 20px y sincronízalo con el movimiento del ratón, el div deberá quedarse pegado a la flecha de tu ratón y moverse junto a él. */

// mousemove -> evento que se dispara cada vez que el puntero del ratón se mueve dentro del área del documento
// event.clientX -> posición horizontal del cursor
// event.clientY -> posición vertical del cursor

const mouseSquareElement = document.getElementById('mouse-square');

const followCursor = event => {
  const positionXMouse = event.clientX;
  const positionYMouse = event.clientY;
};

window.addEventListener('mousemove', followCursor);
