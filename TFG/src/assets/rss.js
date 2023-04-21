async function leerDatos(param)
	{
		let response = await fetch('http://localhost/TFG/assets/body.xml');
		if (!response.ok) {
			throw new Error("HTTP error! status:");
		}
		let str = await response.text();
		let xmlDoc = new window.DOMParser().parseFromString(str, "text/xml")
	
		var strBuffer= "";

		fotos = 1;
		var x=xmlDoc.getElementsByTagName("item");
		for (i=0;i<x.length;i++)
		{
			if (x[i].getElementsByTagName("title")[0] !== undefined) { 
				title=x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
				if (x[i].getElementsByTagName("link")[0] !== undefined) {
					link=x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;
					if (x[i].getElementsByTagName("description")[0] !== undefined) {
						descripcion=x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
						if (x[i].getElementsByTagName("media:content")[0] !== undefined) {
							var element = x[i].getElementsByTagName('media:content')
							var arrayElements = Array.prototype.slice.call( element )
							var attributes = arrayElements[0].attributes
							imagen = attributes[0].value
							if (imagen.includes('jpg') || imagen.includes('JPG')) {
								imagen = "<img src="+imagen+"></img>"
							} else {
								imagen = "<video width=640 height=360 controls src="+imagen+"></video>"
							}
							strBuffer = strBuffer + "<a href='" + link + "'target='_blank'><h3>" + title + "</h3></a>" + imagen + "<p>" + descripcion + "</p><hr><br><br>";
						}
					}
				}
			}
		}
		document.getElementById(param).innerHTML =strBuffer;
	}