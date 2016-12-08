<?php if ( !empty($_GET['jsonp_callback']) ) {
		header("Content-type: text/javascript");		
		$themes = array(
			array(
				"name" => "My Little Pony",
				"fg" => "000000",
				"bg" => "68A9DE",
				"image" => "http://dl.dropbox.com/u/7450541/InkLink/themes/pony.jpg"
			), array(
				"name" => "South Park",
				"fg" => "000000",
				"bg" => "68A9DE",
				"image" => "http://dl.dropbox.com/u/7450541/InkLink/themes/south.jpg"
			), array(
				"name" => "Underwater",
				"fg" => "ffffff",
				"bg" => "000000",
				"image" => "http://dl.dropbox.com/u/7450541/InkLink/themes/water.jpg"
			), array(
				"name" => "Chikorita",
				"fg" => "000000",
				"bg" => "ffffff",
				"image" => "http://dl.dropbox.com/u/7450541/InkLink/themes/chikorita.jpg"
			), array(
				"name" => "Rainy Day",
				"fg" => "ffffff",
				"bg" => "000000",
				"image" => "http://dl.dropbox.com/u/7450541/InkLink/themes/rain.jpg"
			), array(

				"name" => "Hoops and Yoyo",
				"fg" => "ffffff",
				"bg" => "000000",
				"image" => "http://dl.dropbox.com/u/7450541/InkLink/themes/hoops.jpg"
			), array(
				"name" => "Happy Tree Friends",
				"fg" => "ffffff",
				"bg" => "000000",
				"image" => "http://dl.dropbox.com/u/7450541/InkLink/themes/happy.jpg"
			), array(
				"name" => "Four Loko",
				"fg" => "ffffff",
				"bg" => "009DDC",
				"image" => "http://dl.dropbox.com/u/7450541/InkLink/themes/loko.jpg"
			), array(
				"name" => "Angry Birds",
				"fg" => "ffffff",
				"bg" => "011329",
				"image" => "http://dl.dropbox.com/u/7450541/InkLink/themes/angry.jpg",
			), array(
				"name" => "Deathwing",
				"fg" => "ffffff",
				"bg" => "955A3A",
				"image" => "http://dl.dropbox.com/u/7450541/InkLink/themes/deathwing.jpg"
			), array(
				"name" => "Halloween",
				"fg" => "ffffff",
				"bg" => "000000",
				"image" => "http://dl.dropbox.com/u/7450541/InkLink/themes/halloween.jpg"
			), array(
				"name" => "Camo",
				"fg" => "ffffff",
				"bg" => "000000",
				"image" => "http://dl.dropbox.com/u/7450541/InkLink/themes/camo.jpg",
				"size" => "25%"
			)
		);
		echo $_GET['jsonp_callback'] . "(" . json_encode($themes) . ");";
	}