var encabezadoTabla				= "";
var encabezadoTablaContactos	= "";
var encabezadoTablaExcel		= "";
var htmlTabla					= "";
var htmlTablaContactos			= "";
var htmlTablaExcel				= "";
var tituloAplicacion			= "SE@CE";

encabezadoTabla					+= "<tr>";
encabezadoTabla					+= "	<td class='tituloResultado'>N" + String.fromCharCode(176) + "</td>";
encabezadoTabla					+= "	<td class='tituloResultado' style='min-width:130px;'>Nombre o Sigla de la Entidad</td>";
encabezadoTabla					+= "	<td class='tituloResultado' style='min-width:90px;'>Fecha y Hora de Publicaci" + String.fromCharCode(243) + "n</td>";
encabezadoTabla					+= "	<td class='tituloResultado' style='min-width:130px;'>Nomenclatura</td>";
encabezadoTabla					+= "	<td class='tituloResultado'>Objeto de Contrataci" + String.fromCharCode(243) + "n</td>";
encabezadoTabla					+= "	<td class='tituloResultado' style='min-width:130px;'>Descripci" + String.fromCharCode(243) + "n de Objeto</td>";
encabezadoTabla					+= "	<td class='tituloResultado'>Valor Referencial / Estimado</td>";
encabezadoTabla					+= "	<td class='tituloResultado'>Moneda</td>";
encabezadoTabla					+= "	<td class='tituloResultado' style='min-width:90px;'>Fecha de Otorgamiento</td>";
encabezadoTabla					+= "	<td class='tituloResultado'>" + String.fromCharCode(205) + "tems</td>";
encabezadoTabla					+= "	<td class='tituloResultado'>Datos de contacto</td>";
encabezadoTabla					+= "</tr>";

encabezadoTablaExcel			+= "<tr>";
encabezadoTablaExcel			+= "	<td class='tituloResultado'>N" + String.fromCharCode(176) + "</td>";
encabezadoTablaExcel			+= "	<td class='tituloResultado'>Nombre o Sigla de la Entidad</td>";
encabezadoTablaExcel			+= "	<td class='tituloResultado'>Fecha y Hora de Publicaci" + String.fromCharCode(243) + "n</td>";
encabezadoTablaExcel			+= "	<td class='tituloResultado'>Nomenclatura</td>";
encabezadoTablaExcel			+= "	<td class='tituloResultado'>Objeto de Contrataci" + String.fromCharCode(243) + "n</td>";
encabezadoTablaExcel			+= "	<td class='tituloResultado'>Descripci" + String.fromCharCode(243) + "n de Objeto</td>";
encabezadoTablaExcel			+= "	<td class='tituloResultado'>Valor Referencial / Estimado</td>";
encabezadoTablaExcel			+= "	<td class='tituloResultado'>Moneda</td>";
encabezadoTablaExcel			+= "	<td class='tituloResultado'>Fecha de Otorgamiento</td>";
encabezadoTablaExcel			+= "	<td class='tituloResultado'>Descripci" + String.fromCharCode(243) + "n del " + String.fromCharCode(205) + "tem</td>";
encabezadoTablaExcel			+= "	<td class='tituloResultado'>Postor</td>";
encabezadoTablaExcel			+= "	<td class='tituloResultado'>Estado</td>";
encabezadoTablaExcel			+= "	<td class='tituloResultado'>Monto Adjudicado</td>";
encabezadoTablaExcel			+= "	<td class='tituloResultado'>Datos de contacto</td>";
encabezadoTablaExcel			+= "</tr>";

encabezadoTablaContactos		+= "<tr>";
encabezadoTablaContactos		+= "	<td class='tituloResultado'>Empresa</td>";
encabezadoTablaContactos		+= "	<td class='tituloResultado'>RUC</td>";
encabezadoTablaContactos		+= "	<td class='tituloResultado'>Tel&eacute;fono</td>";
encabezadoTablaContactos		+= "	<td class='tituloResultado'>Email</td>";
encabezadoTablaContactos		+= "	<td class='tituloResultado'>CMC</td>";
encabezadoTablaContactos		+= "	<td class='tituloResultado'>Sanciones</td>";
encabezadoTablaContactos		+= "	<td class='tituloResultado'>Penalidades</td>";
encabezadoTablaContactos		+= "	<td class='tituloResultado'>Nombre o Sigla de la Entidad</td>";
encabezadoTablaContactos		+= "	<td class='tituloResultado'>Fecha y Hora de Publicaci" + String.fromCharCode(243) + "n</td>";
encabezadoTablaContactos		+= "	<td class='tituloResultado'>Nomenclatura</td>";
encabezadoTablaContactos		+= "	<td class='tituloResultado'>Objeto de Contrataci" + String.fromCharCode(243) + "n</td>";
encabezadoTablaContactos		+= "	<td class='tituloResultado'>Descripci" + String.fromCharCode(243) + "n de Objeto</td>";
encabezadoTablaContactos		+= "	<td class='tituloResultado'>Valor Referencial / Valor Estimado</td>";
encabezadoTablaContactos		+= "	<td class='tituloResultado'>Moneda</td>";
encabezadoTablaContactos		+= "	<td class='tituloResultado'>Fecha de Otorgamiento</td>";
encabezadoTablaContactos		+= "	<td class='tituloResultado'>Descripci" + String.fromCharCode(243) + "n del " + String.fromCharCode(205) + "tem</td>";
encabezadoTablaContactos		+= "	<td class='tituloResultado'>Postor</td>";
encabezadoTablaContactos		+= "	<td class='tituloResultado'>Estado</td>";
encabezadoTablaContactos		+= "	<td class='tituloResultado'>Monto Adjudicado</td>";
encabezadoTablaContactos		+= "</tr>";


function fn_OcultarError()
{
	document.getElementById("div_MensajeError").innerHTML		= "";
	document.getElementById("div_MensajeError").style.display	= "none";
}

function fn_OcultarEstado()
{
	document.getElementById("div_Estado").innerHTML				= "";
	document.getElementById("div_Estado").style.display			= "none";
	window.document.title										= tituloAplicacion;
}

function fn_MostrarError(mensaje)
{
	fn_OcultarEstado();
	document.getElementById("div_MensajeError").innerHTML		= mensaje;
	document.getElementById("div_MensajeError").style.display	= "block";
}

function fn_MostrarEstado(mensaje)
{
	fn_OcultarError();
	document.getElementById("div_Estado").innerHTML				= mensaje;
	document.getElementById("div_Estado").style.display			= "block";
}

function fn_BloquearBotones()
{
	document.getElementById("body_Seace").style.cursor				= "wait";
	document.getElementById("btn_RefrescarCaptcha").style.cursor	= "wait";
	document.getElementById("btn_RefrescarCaptcha").disabled		= true;
	document.getElementById("btn_Buscar").style.cursor				= "wait";
	document.getElementById("btn_Buscar").disabled					= true;
	document.getElementById("btn_Exportar").style.cursor			= "wait";
	document.getElementById("btn_Exportar").disabled				= true;
}

function fn_HabilitarBotones()
{
	document.getElementById("body_Seace").style.cursor				= "default";
	document.getElementById("btn_RefrescarCaptcha").style.cursor	= "pointer";
	document.getElementById("btn_RefrescarCaptcha").disabled		= false;
	document.getElementById("btn_Buscar").style.cursor				= "pointer";
	document.getElementById("btn_Buscar").disabled					= false;
	document.getElementById("btn_Exportar").style.cursor			= "pointer";
	document.getElementById("btn_Exportar").disabled				= false;
}

function fn_FechaValida(cadena)
{
	if (cadena != "")
	{
		if (cadena.length < 8)
			return false;

		var caracter;

		for (var i = 0; i < cadena.length; i++)
		{
			caracter = cadena.substr (i, 1);

			if (caracter != "0" && caracter != "1" && caracter != "2" && caracter != "3" && caracter != "4" && caracter != "5" && caracter != "6" && caracter != "7" && caracter != "8" && caracter != "9" && caracter != "/")
				return false;
		}

		var barra1 = cadena.indexOf ("/");
		var barra2 = cadena.indexOf ("/", barra1 + 1);

		if (barra1 == -1 || barra2 == -1)
			return false;

		if (barra1 == 0)
			return false;

		if (barra2 == cadena.length - 1)
			return false;

		if (barra2 - barra1 == 1)
			return false;

		var day		= parseInt(cadena.substr(0, barra1), 10);
		var month	= parseInt(cadena.substr(barra1 + 1, barra2 - barra1 - 1), 10);
		var year	= parseInt(cadena.substr(barra2 + 1), 10);

		if (day > 31 || day < 1)
			return false;

		if (month > 12 || month < 1)
			return false;

		if (year < 1900)
			return false;

		if ((month == 4 || month == 6 || month == 9 || month == 11) && day > 30)
			return false;

		if (month == 2 && day > 29)
			return false;

		var anioBisiesto = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;

		if (month == 2 && day == 29 && !anioBisiesto)
			return false;
	}
	else
	{
		return false;
	}
	return true;
}

function fn_ValorValido(cadena)
{
	if (cadena != "")
	{
		if (cadena.length > 9)
			return false;

		var caracter;

		for (var i = 0; i < cadena.length; i++)
		{
			caracter = cadena.substr (i, 1);

			if (caracter != "0" && caracter != "1" && caracter != "2" && caracter != "3" && caracter != "4" && caracter != "5" && caracter != "6" && caracter != "7" && caracter != "8" && caracter != "9")
				return false;
		}
	}
	else
	{
		return false;
	}
	return true;
}

function fn_InicioTabla()
{
	htmlTabla			= "";
	htmlTablaExcel		= "";
	htmlTablaContactos	= "";
}

function fn_AgregarFila(htmlFila, htmlFilaExcel, htmlFilaContactos)
{
	htmlTabla			= htmlTabla + htmlFila;
	htmlTablaExcel		= htmlTablaExcel + htmlFilaExcel;
	htmlTablaContactos	= htmlTablaContactos + htmlFilaContactos;
}

function fn_FinTabla(conError)
{
	if (conError)
	{
		document.getElementById("tbl_Resultado").innerHTML				= "";
		document.getElementById("tbl_ResultadoParaExcel").innerHTML		= "";
		document.getElementById("tbl_ResultadoContactos").innerHTML		= "";
	}
	else
	{
		document.getElementById("tbl_Resultado").innerHTML				= encabezadoTabla + htmlTabla;
		document.getElementById("tbl_ResultadoParaExcel").innerHTML		= encabezadoTablaExcel + htmlTablaExcel;
		document.getElementById("tbl_ResultadoContactos").innerHTML		= encabezadoTablaContactos + htmlTablaContactos;
	}

	document.getElementById("txt_ValorCaptcha").value	= "";
	document.getElementById("img_Captcha").src			= "";
	document.getElementById("txt_NombreArchivo").value	= "";

	fn_HabilitarBotones();
	fn_OcultarEstado();

	window.document.title	= tituloAplicacion + " | FINALIZADO";
	document.getElementById("aud_Sonido").play();
}

function fn_TablaGuardadaParaExcel(paramNombreArchivoVisualizacion, paramNombreArchivoTrabajo, paramNombreArchivoContactos, paramTokenArchivoVisualizacion, paramTokenArchivoTrabajo, paramTokenArchivoContactos)
{
	fn_HabilitarBotones();

	var estado	= "";
	estado		= estado + "<table class='tableCenter'>";
	estado		= estado + "	<tr>";
	estado		= estado + "		<td colspan='3' style='padding-bottom:3px; text-align:center;'>Exportaci&oacute;n finalizada.</td>";
	estado		= estado + "	</tr>";
	estado		= estado + "	<tr>";
	estado		= estado + "		<td><a href='seace-excel.php?paramNombreArchivo=" + paramNombreArchivoVisualizacion + "&paramToken=" + paramTokenArchivoVisualizacion + "' target='_blank'>Versi&oacute;n para visualizaci&oacute;n</a></td>";
	estado		= estado + "		<td style='padding-left:20px; padding-right:20px'><a href='seace-excel.php?paramNombreArchivo=" + paramNombreArchivoTrabajo + "&paramToken=" + paramTokenArchivoTrabajo + "' target='_blank'>Versi&oacute;n para trabajo</a></td>";
	estado		= estado + "		<td><a href='seace-excel.php?paramNombreArchivo=" + paramNombreArchivoContactos + "&paramToken=" + paramTokenArchivoContactos + "' target='_blank'>Contactos capturados</a></td>";
	estado		= estado + "	</tr>";
	estado		= estado + "</table>";

	fn_MostrarEstado(estado);
}

function fn_ExportarResultado()
{
	var param	= "guardarTablaParaExcel=1";

	fn_OcultarEstado();

	if (document.getElementById("tbl_Resultado").innerHTML == "")
	{
		fn_MostrarError("No hay datos para exportar.");
	}
	else
	{
		fn_BloquearBotones();
		fn_MostrarEstado("Exportando a Excel...");

		param	= param + "&tablaVisualizacion="	+ encodeURIComponent(document.getElementById("tbl_Resultado").innerHTML);
		param	= param + "&tablaTrabajo="			+ encodeURIComponent(document.getElementById("tbl_ResultadoParaExcel").innerHTML);
		param	= param + "&tablaContactos="		+ encodeURIComponent(document.getElementById("tbl_ResultadoContactos").innerHTML);
		param	= param + "&departamento="			+ document.getElementById("txt_ValorFiltroActual_Departamento").value;
		param	= param + "&fechaInicio="			+ document.getElementById("txt_ValorFiltroActual_FechaInicio").value;
		param	= param + "&fechaFin="				+ document.getElementById("txt_ValorFiltroActual_FechaFin").value;

		fn_InvocarAjax_Post("seace-ajax.php", param);
	}
}

function fn_ObtenerCaptcha()
{
	fn_BloquearBotones();
	fn_OcultarError();
	fn_OcultarEstado();

	document.getElementById ("txt_ValorCaptcha").value				= "";
	document.getElementById ("img_Captcha").src						= "";
	document.getElementById ("div_ObteniendoImagen").style.display	= "block";

	fn_InvocarAjax_Post("seace-ajax.php", "obtenerCaptcha=1&contrasena=" + document.getElementById("txt_Contrasena").value + "&nombreArchivo=" + document.getElementById("txt_NombreArchivo").value);
}

function fn_ResultadoObtencionCaptcha(nombreArchivo, nombreArchivoCookie, input1, input2, input3, input4, input5, codViewState, conError)
{
	fn_HabilitarBotones();
	document.getElementById("div_ObteniendoImagen").style.display	= "none";

	if (conError == false)
	{
		document.getElementById("img_Captcha").src					= "captcha/" + nombreArchivo;
		document.getElementById("txt_NombreArchivo").value			= nombreArchivo;
		document.getElementById("txt_NombreArchivoCookie").value	= nombreArchivoCookie;
		document.getElementById("txt_Input1").value					= input1;
		document.getElementById("txt_Input2").value					= input2;
		document.getElementById("txt_Input3").value					= input3;
		document.getElementById("txt_Input4").value					= input4;
		document.getElementById("txt_Input5").value					= input5;
		document.getElementById("txt_CodViewState").value			= codViewState;
	}
	else
	{
		document.getElementById("txt_NombreArchivo").value			= "";
	};
}

function fn_SubmitirCaptcha()
{
	fn_OcultarEstado();

	var valorCaptcha	= document.getElementById("txt_ValorCaptcha").value.trim();
	var fechaInicio		= document.getElementById("txt_FechaInicio").value.trim();
	var fechaFin		= document.getElementById("txt_FechaFin").value.trim();
	var valorMinimo		= document.getElementById("txt_ValorMinimo").value.trim();

	if (document.getElementById("txt_NombreArchivo").value == "")
	{
		fn_MostrarError("Debe obtener una imagen Captcha.");
		return false;
	}

	if (valorCaptcha == "")
	{
		fn_MostrarError("Debe ingresar el Captcha.");
		return false;
	}

	if (valorCaptcha.length != 5)
	{
		fn_MostrarError("El Captcha ingresado es incorrecto.");
		return false;
	}

	if (document.getElementById("cmb_AnioConvocatoria").value == "")
	{
		fn_MostrarError("El A" + String.fromCharCode(241) + "o de la Convocatoria es obligatorio.");
		return false;
	}

	if (fn_FechaValida(fechaInicio) == false)
	{
		fn_MostrarError("La Fecha de Inicio Publicaci" + String.fromCharCode(243) + "n es incorrecta (el formato v" + String.fromCharCode(225) + "lido es dd/mm/yyyy).");
		return false;
	}

	if (fn_FechaValida(fechaFin) == false)
	{
		fn_MostrarError("La Fecha de Fin Publicaci" + String.fromCharCode(243) + "n es incorrecta (el formato v" + String.fromCharCode(225) + "lido es dd/mm/yyyy).");
		return false;
	}

	if ((fechaInicio == "") || (fechaFin == ""))
	{
		fn_MostrarError("Deben ingresarse las dos fechas.");
		return false;
	}

	if (fn_ValorValido(valorMinimo) == false)
	{
		fn_MostrarError("El Valor M" + String.fromCharCode(237) + "nimo es incorrecto.");
		return false;
	}

	document.getElementById("txt_ValorFiltroActual_Departamento").value		= document.getElementById("cmb_Departamento").value;
	document.getElementById("txt_ValorFiltroActual_AnioConvocatoria").value	= document.getElementById("cmb_AnioConvocatoria").value;
	document.getElementById("txt_ValorFiltroActual_FechaInicio").value		= fechaInicio;
	document.getElementById("txt_ValorFiltroActual_FechaFin").value			= fechaFin;
	document.getElementById("txt_ValorFiltroActual_ValorMinimo").value		= valorMinimo;

	fn_BloquearBotones();
	fn_MostrarEstado("Obteniendo la cantidad de p" + String.fromCharCode(225) + "ginas...");

	window.document.title													= tituloAplicacion + " | Buscando...";
	document.getElementById("tbl_Resultado").innerHTML						= "";
	document.getElementById("tbl_ResultadoParaExcel").innerHTML				= "";
	document.getElementById("tbl_ResultadoContactos").innerHTML				= "";

	var param	= "submitirCaptcha=1";
	param 		= param + "&contrasena="			+ document.getElementById("txt_Contrasena").value;
	param 		= param + "&valorCaptcha="			+ valorCaptcha;
	param 		= param + "&nombreArchivo="			+ document.getElementById("txt_NombreArchivo").value;
	param 		= param + "&input1="				+ document.getElementById("txt_Input1").value;
	param 		= param + "&input2="				+ document.getElementById("txt_Input2").value;
	param 		= param + "&input3="				+ document.getElementById("txt_Input3").value;
	param 		= param + "&input4="				+ document.getElementById("txt_Input4").value;
	param 		= param + "&input5="				+ document.getElementById("txt_Input5").value;
	param 		= param + "&codViewState="			+ document.getElementById("txt_CodViewState").value;
	param 		= param + "&nombreArchivoCookie="	+ document.getElementById("txt_NombreArchivoCookie").value;
	param 		= param + "&departamento="			+ document.getElementById("cmb_Departamento").value;
	param 		= param + "&anioConvocatoria="		+ document.getElementById("cmb_AnioConvocatoria").value;
	param 		= param + "&fechaInicio="			+ fechaInicio;
	param 		= param + "&fechaFin="				+ fechaFin;
	param 		= param + "&valorMinimo="			+ valorMinimo;

	fn_InvocarAjax_Post("seace-ajax.php", param);
}

function fn_ResultadoSubmitirCaptcha(cantPag, cantReg)
{
	if (cantReg == 0)
	{
		fn_FinTabla(true);
		fn_MostrarEstado("No se encontraron registros o el Captcha fue mal ingresado.");
	}
	else
	{
		document.getElementById("txt_CantPaginas").value	= cantPag.toString();
		fn_ObtenerDatosPagina("1");
	}
}

function fn_ObtenerDatosPagina(nroPagina)
{
	document.getElementById("txt_NroPaginaActual").value	= nroPagina;

	fn_MostrarEstado("Obteniendo p" + String.fromCharCode(225) + "gina " + nroPagina + " de " + document.getElementById("txt_CantPaginas").value + "...");

	var param	= "obtenerDatosPagina=1";
	param		= param + "&contrasena="			+ document.getElementById("txt_Contrasena").value;
	param		= param + "&valorCaptcha="			+ document.getElementById("txt_ValorCaptcha").value.trim();
	param		= param + "&nombreArchivo=" 		+ document.getElementById("txt_NombreArchivo").value;
	param		= param + "&input1="				+ document.getElementById("txt_Input1").value;
	param		= param + "&input2="				+ document.getElementById("txt_Input2").value;
	param		= param + "&input3="				+ document.getElementById("txt_Input3").value;
	param		= param + "&input4="				+ document.getElementById("txt_Input4").value;
	param		= param + "&input5="				+ document.getElementById("txt_Input5").value;
	param		= param + "&codViewState="			+ document.getElementById("txt_CodViewState").value;
	param		= param + "&nombreArchivoCookie="	+ document.getElementById("txt_NombreArchivoCookie").value;
	param		= param + "&departamento="			+ document.getElementById("txt_ValorFiltroActual_Departamento").value;
	param		= param + "&anioConvocatoria="		+ document.getElementById("txt_ValorFiltroActual_AnioConvocatoria").value;
	param		= param + "&fechaInicio="			+ document.getElementById("txt_ValorFiltroActual_FechaInicio").value;
	param		= param + "&fechaFin="				+ document.getElementById("txt_ValorFiltroActual_FechaFin").value;
	param		= param + "&valorMinimo="			+ document.getElementById("txt_ValorFiltroActual_ValorMinimo").value;
	param		= param + "&cantPaginas="			+ document.getElementById("txt_CantPaginas").value;
	param		= param + "&nroPaginaActual="		+ document.getElementById("txt_NroPaginaActual").value;

	fn_InvocarAjax_Post("seace-ajax.php", param);
}


/* Objeto y funciones para AJAX. */

var xmlHttp;

function fn_InvocarAjax_Post(archivo, parametros)
{
	try
	{
		xmlHttp = new XMLHttpRequest();
	}
	catch(e)
	{
		alert("Su navegador no soporta AJAX.");
		return false;
	}

	xmlHttp.onreadystatechange = fn_ProcesarRespuestaAjax;
	xmlHttp.open("POST", archivo, true);
	xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	try
	{
		xmlHttp.send(parametros);
	}
	catch(e)
	{
		alert("Error al invocar Ajax: " + e.message);
	}
}

function fn_ProcesarRespuestaAjax()
{
	if (xmlHttp.readyState == 4)
	{
		try
		{
			eval(xmlHttp.responseText);
		}
		catch(e)
		{
			alert("Error al volver de Ajax: " + e.message);
		}
	}
}

function fn_testAjax_Post(archivo, parametros)
{
	try
	{
		xmlHttp = new XMLHttpRequest();
	}
	catch(e)
	{
		alert("Su navegador no soporta AJAX.");
		return false;
	}

	xmlHttp.onreadystatechange = fn_testRespuestaAjax;
	xmlHttp.open("POST", archivo, true);
	xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	try
	{
		xmlHttp.send(parametros);
	}
	catch(e)
	{
		alert("Error de Ajax (1): " + e.message);
	}
}

function fn_testRespuestaAjax()
{
	if (xmlHttp.readyState == 4)
	{
		try
		{
			console.log(xmlHttp.responseText);
		}
		catch(e)
		{
			alert("Error de Ajax (2): " + e.message);
		}
	}
}

/* Fin objeto y funciones para AJAX. */
