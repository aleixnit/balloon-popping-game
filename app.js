// tu código aquí

// Necesito una variable de estado para saber cuantos globos he de explotar
let totalBallons = document.querySelectorAll(".balloon").length;

// Usad adecadamente querySelectorAll y el método forEach para asociar el evento 'mouseover' , y que me mustre por console.log el 'globo' actual sobre el cual estamos planeando. Pista: necesitais también usar el objeto event
document.querySelectorAll(".balloon").forEach((b) =>
  b.addEventListener("mouseover", (event) => {
    const balloon = event.target;
    balloon.style.backgroundColor = "#ededed";
    balloon.innerHTML = "POP!";

   // 1. cada vez que petamos un globo, decrementar la variable de estado

    // 2. cuando la variable de estado ha llegado 0, tenemos que mostrar el mensaje de felicitación y esconder todos los balones
  })
);
