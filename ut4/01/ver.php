<?php
$xsd = file_get_contents("01.xsd");
$dtd = file_get_contents("01.dtd");
$xml = file_get_contents("01.xml");
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="../webroot/css/estilos.css">
    <title>Ut4.1 Álvaro Calderón</title>
    <link rel="icon" type="image/jpg" href="/alvarocalperLMSGIProyectoLMSGI/webroot/favicon/logo_BC.jpg">
        <link rel="stylesheet" href="./css/estilos.css">
</head>

<body>
	<header>
		<h1> UT4.1 Biblioteca</h1>
	</header>
	<main>
    <details class="ver">
        <summary>  Biblioteca</summary>
         <iframe src="Ut4_01.pdf" width="100%" height="800px"></iframe>

    </details>
     <details class="ver">
        <summary> XML Biblioteca</summary>
         <pre><?php echo htmlspecialchars($xml); ?></pre>
    </details>
	     <details class="ver">
        <summary> DTD Biblioteca</summary>
         <pre><?php echo htmlspecialchars($dtd); ?></pre>
    </details>
		     <details class="ver">
        <summary> XSD Biblioteca</summary>
         <pre><?php echo htmlspecialchars($xsd); ?></pre>
    </details>
		
	</main>
	<footer>
        <address>2025-26 IES Los Sauces <a href="/index.html#4" id="nombre">Álvaro Calderón Pérez</a> . Todos los derechos reservados.</address>
        <a href="https://validator.w3.org/nu/?doc=https%3A%2F%2Falvarocalper.ieslossauces.es%2Fut2%2F01%2FlistaAsig.html" id="vali">Web validada</a>
        <p>Última vez modificado:<time datetime="2026-04-09">2026-04-09</time></p>
        <a href="https://github.com/AlvaroCalde/alvarocalperLMSGIProyectoLMSGI"><img src="/alvarocalperLMSGIProyectoLMSGI/webroot/images/github.png" alt="enlace a github"></a>
        <a href="https://www.orange.es"><img src="/alvarocalperLMSGIProyectoLMSGI/webroot/images/casa_negra.png" alt="enlace a web de referencia"></a> 
    </footer>
</body>

</html>