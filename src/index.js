<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="./src/styles.css">
<title>Simon Says</title>
</head>
<body>
<main>
  <h1 class="js-heading">Simon Says</h1>
  
 


  <section class="game-controls">
    <button class="start-button js-start-button">Start</button>
    <span class="status hidden js-status"></span>
  </section>

  <section class="pad-container unclickable js-pad-container">
    <div class="pad pad-red js-pad-red" data-color="red"></div>
    <div class="pad pad-green js-pad-green" data-color="green"></div>
    <div class="pad pad-blue js-pad-blue" data-color="blue"></div>
    <div class="pad pad-yellow js-pad-yellow" data-color="yellow"></div>
  </section>
</main>
<script src="./src/index.js"></script>
</body>
</html>
