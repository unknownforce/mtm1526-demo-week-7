<?php

require_once 'includes/db.php';

$results = $db->query('
	SELECT id, item, status
	FROM todo
');

foreach ($results as $item) {
	echo '<li>' . $item['item'] . '</li>';	
	
}