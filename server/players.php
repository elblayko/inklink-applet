<?php
	if ( !empty($_GET['jsonp_callback'] ) ) {
		header("Content-type: text/javascript");
		
		$data = file_get_contents("http://inkhost.shockwave.com/CurrentPlayers?rand=" . rand());
		echo $_GET['jsonp_callback'] . "(\"" . trim($data) . "\");";
	}