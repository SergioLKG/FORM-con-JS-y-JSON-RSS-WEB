Importante abrir esta pagina web desde "http://localhost/TFG/index.html

(Servidor Apache XAMPP previamente iniciado y web incluida en "C:/xampp/htdocs")


Esta web se basa en una pagina principal en la que accedemos directamente a un RSS(en este caso el de la CNN), junsto a un segundo HTML que hace de formulario, recopilamos los datos del formulario con un Script y los convertimos en un archivo JSON el cual se nos descargara al enviar dicho formulario.

Direcctory tree:

 TFG ./
├─
│   formu.html
│   index.html
│   README.md
│   README.txt
│
├───assets (Scripts y XML)
│       body.xml
│       generarArchivoJSON.js
│       rss.js
│
├───css
│       style.css
│
├───img
│       ...
│
└───JSON (He guardado una prueba del archivo output)
        datos.json