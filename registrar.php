<?php
$Nombre = $_POST["Nombre"];
$Email = $_POST["Email"];
$Contraseña = $_POST["Contraseña"];


include("conexion.php");

$sql = "INSERT INTO usuario(Nombre, Email, Clave )
        VALUES('$Nombre', '$Email', '$Contraseña')";

mysqli_query($conexion, $sql);

header("Location: index.html");

?>