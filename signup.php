<?php

  require 'database.php';

  $message = '';

  if (!empty($_POST['email']) && !empty($_POST['password'])) {
    $sql = "INSERT INTO users (nombre,pais,celular,email, password) VALUES (:nombre,:pais,:celular,:email, :password)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':nombre', $_POST['nombre']);
    $stmt->bindParam(':pais', $_POST['pais']);
    $stmt->bindParam(':celular', $_POST['celular']);
    $stmt->bindParam(':email', $_POST['email']);
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    $stmt->bindParam(':password', $password);

    if ($stmt->execute()) {
      $message = 'Usuario creado correctamente';
    } else {
      $message = 'Hay un problema al crear tu cuenta';
    }
  }
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Registrarse</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
    <script src="countries.js" ></script>
    <script src="form.js" ></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <style>
      input[type="number"]{
        outline: none;
        padding: 20px;
        display: block;
        width: 300px;
        border-radius: 3px;
        border: 1px solid #eee;
        margin: 20px auto;
      }
      select{
        outline: none;
        padding: 20px;
        display: block;
        width: 343px;
        border-radius: 3px;
        border: 1px solid #eee;
        margin: 20px auto;
      }
    </style>
  </head>
  <body>

    <?php require 'partials/header.php' ?>

    <?php if(!empty($message)): ?>
      <p> <?= $message ?></p>
    <?php endif; ?>

    <h1>Registrarse</h1>
    <span>o <a href="login.php">Iniciar Sesion</a></span>

    <form action="signup.php" method="POST" id="form">
      <input type="text" placeholder="Eli Peralta" id="username" name="nombre">
      <select name="pais" id="paisOrigen"></select>
      <input name="celular" type="number" placeholder="3006487579"  >
      <input name="email" type="text" placeholder="Ingresa tu correo">
      <input name="password" type="password" placeholder="Ingresa tu contraseña">
      <input name="confirm_password" type="password" placeholder="Confirma la contraseña">
      <input type="submit" id="button" value="Registrarse">
    </form>

  </body>
</html>
