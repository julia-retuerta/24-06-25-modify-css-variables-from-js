// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

//coge todo lo que hay en el root de css
const rootStyles = document.documentElement.style;

/* const inputColorElement = document.getElementById('input-color');

inputColorElement.addEventListener('input', event => {
  rootStyles.setProperty('--primary-color', event.target.value);
});

rootStyles.setProperty('--primary-color', 'green'); */

// EJERCICIOS VARIABLES CSS

/* - Crea un div de color rojo y colócalo en la parte superior izquierda de tu web. Haz que tu web tenga un min-height de 500vh para generar scroll. El div deberá sincronizarse con el scroll, si estás arriba del todo medirá 0 de ancho y si está abajo del todo medirá el 100%, según vayas haciendo scroll el div deberá ir creciendo o encogiendo en función de si subes o bajas. */

const scrollRectangleElement = document.getElementById('scroll-rectangle');

window.addEventListener('scroll');

//buscar la relación entre el ancho y el scroll, regla de 3
