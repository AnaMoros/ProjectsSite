<?php

$todos = [];
if (file_exists('todo.json')) {
  $json = file_get_contents('todo.json');
  $todos = json_decode($json, true);
}

// echo '<pre>';
// var_dump($jsonArray);
// echo '</pre>';

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>To Do List</title>
</head>

<body>
  <form action="newtodo.php" method="post">
    <label for="todo_name">My To Do List</label>
    <input type="text" name="todo_name" id="todo_name">
    <button type="submit"> New To Do</button>
  </form>
  <?php foreach ($todos as $todoName => $todo) : ?>
    <div>
      Todo item: <?php echo  $todoName; ?>
      <input type="checkbox" name="complete_todo" <?php echo $todo['completed'] ? 'checked' : ''; ?>>
      <form action="delete.php" method="post">
        <input type="hidden" name="todo_name" value="<?php echo $todoName; ?>">
        <button>Delete</button>
      </form>

    </div>
  <?php endforeach; ?>

</body>

</html>
