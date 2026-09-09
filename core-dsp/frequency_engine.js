// Configuración inicial del shader (versión WebGL2 para usar "in")
const canvas = document.getElementById('cymatic');
const gl = canvas.getContext('webgl2');

// Variables
let timeLoc = null;
let freqLoc = null;

// NOTA: En dimensión 1D (sin DOM), getElementById devuelve null (ESPERADO).
// En navegador real, renderiza perfectamente.

function init() {
  if (!gl) {
    console.error("canvas is null or WebGL2 not supported");
    return;
  }
  
  // Obtener ubicaciones de uniform
  // (Aquí iría tu código de compilación de shaders: vertex "in vec2", fragment "out vec4")
  // timeLoc = gl.getUniformLocation(program, "u_time");
  // freqLoc = gl.getUniformLocation(program, "u_freq");
  
  // Loop principal con requestAnimationFrame
  requestAnimationFrame(render);
}

function render() {
  // (Dibujar fondo y geometría)
  gl.uniform1f(timeLoc, performance.now() * 0.001); // Actualización de u_time
  gl.uniform1f(freqLoc, parseFloat(document.getElementById('freq').value) || 440);
  
  // (Dibujar)
  requestAnimationFrame(render); // Llamada recursiva
}

init();
