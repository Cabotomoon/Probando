<?php
if (isset ($_REQUEST["paramNombreArchivo"]))
	$paramNombreArchivo = trim ($_REQUEST["paramNombreArchivo"]);
else
	$paramNombreArchivo = "";

if (isset ($_REQUEST["paramToken"]))
	$paramToken = trim ($_REQUEST["paramToken"]);
else
	$paramToken = "";	
	
//header ('Content-Disposition: attachment; filename="seace-' . date ("Y-m-d") . "-" . $param . '.xls"');
header ('Content-Disposition: attachment; filename="' . $paramNombreArchivo . '"');
header ('Content-type: application/vnd.ms-excel');

$nombreArchivoHtml = "excel-" . $paramToken . ".html";

$tabla = "";

if (file_exists ("excel/" . $nombreArchivoHtml))
{
	$fileHandle = fopen ("excel/" . $nombreArchivoHtml, "r");
	
	$tabla = fread ($fileHandle, filesize ("excel/" . $nombreArchivoHtml));
	
	fclose ($fileHandle);
	
	$tabla = str_replace ('<table class="tablaResultado">', '<table border="1" cellpadding="0" cellspacing="0">', $tabla);
	
	//unlink ("excel/" . $nombreArchivoHtml);
}

/*
$estilos = "";

if (file_exists ("seace.css"))
{
	$fileHandle2 = fopen ("seace.css", "r");
	
	$estilos = fread ($fileHandle2, filesize ("seace.css"));
	
	fclose ($fileHandle2);
}
*/
?>
<html>
    <body>
    	<style>
		.tituloResultado {
			font-weight: bold;
			text-align: left;
			vertical-align: top;
			background-color: #f7b64b;
			height: 20px;
		}
		
		.registroResultado {
			text-align: left;
			vertical-align: top;
		}
		
		.tituloResultadoTablaInterna {
			text-align: left;
			vertical-align: top;
			background-color: #f7b64b;
			height: 20px;
		}
		
		.registroResultadoTablaInterna {
			text-align: left;
			vertical-align: top;
		}
        </style>
        <table border="1" cellpadding="0" cellspacing="0">
	    	<?php  echo (utf8_decode ($tabla)); ?>
        </table>
    </body>
</html>
