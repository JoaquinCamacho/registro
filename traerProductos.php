<?php

include("conexion.php");

$sql = "SELECT
            id_producto AS id,
            nombre_de_producto AS nombre,
            precio,
            foto AS imagen,
            descripcion,
            caracteristicas,
            id_categoria AS categoria
        FROM producto";

$resultado = mysqli_query($conexion, $sql);

$productos = [];

while($fila = mysqli_fetch_assoc($resultado)){
    $productos[] = $fila;
}

echo json_encode($productos);

?>