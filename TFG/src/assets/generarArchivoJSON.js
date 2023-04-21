function capturarDatos() {
    const link = document.createElement('a');
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var calle = document.getElementById("calle").value;
    var poblacion = document.getElementById("poblacion").value;
    var provincia = document.getElementById("provincia").value;
    var email = document.getElementById("email").value;
    var lista = document.getElementById("sexo");
    var indiceSeleccionado = lista.selectedIndex;
    var opcionSeleccionada = lista.options[indiceSeleccionado];
    var sexo = opcionSeleccionada.text;
    var textarea = document.getElementById("mensaje").value;
  
    const datos = {
      nombre: nombre,
      apellidos: apellidos,
      calle: calle,
      poblacion: poblacion,
      provincia: provincia,
      email: email,
      sexo: sexo,
      textarea: textarea,
    };
  
    var jsonString = JSON.stringify(datos);
    var blob = new Blob([jsonString], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    const fechaActual = Date.now(); 
    const nombreArchivo = `datos_${fechaActual}.json`;
    link.href = url;
    link.download = nombreArchivo;
    document.body.appendChild(link);
    link.click();
  };
  