<?php
$Nombre = $_POST["Nombre"];
$Email = $_POST["Email"];
$Contraseña = $_POST["Contraseña"];
$Localizacion =$_POST["Localizacion"];  
$Foto = $_POST["Foto"];



include("conexion.php");

$sql = "INSERT INTO usuario(Nombre, Email, Clave, Direccion, Foto )
        VALUES('$Nombre', '$Email', '$Contraseña', '$Localizacion', '$Foto')";

mysqli_query($conexion, $sql);

header("Location: index.html");

?>