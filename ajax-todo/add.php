<?php

require_once 'includes/db.php';

$errors = array();

$item = filter_input(INPUT_POST, 'item', FILTER_SANITIZE_STRING);

if ($_SERVER['REQUEST_METHOD'] == 'POST' ) {
	if (empty($item)) {
		$errors['item'] = true;	
	}
	
	if (empty($errors)) {
		$sql = $db->prepare('
			INSERT INTO todo (item)
			VALUES (:item)
		');
		$sql->bindValue(':item', $item, PDO::PARAM_STR);
		$sql->execute();
	}
}