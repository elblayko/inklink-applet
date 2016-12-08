<?php

	/*
		Special characters:
		
		Wrap in @ for italics.
		%n is replaced with the player's name.
	*/
	
	if ( !empty($_GET['jsonp_callback']) ) {
		header("Content-type: text/javascript");

		$names = array( "Reesuh", "Alice", "Shelby", "Abby", "Dar", "Blake", "Browncheese", "Amanda", "Alyssa", "Kristen", "Ryan", "Whitney", "RK", "iBLAKE" );
		shuffle($names);

		$adjective = array( 
			"is lame", 
			"is awesome", 
			"a creeper", 
			"is on top of their game", 
			"is all twisted up in the game", 
			"can't hang", 
			"completes me",
			"is a big deal",
			"probably likes %n",
			"is a thug",
			"is here to party",
			"is a sick person",
			"tastes like chicken",
			"eats pants",
			"is cute",
			"wants me to call them maybe",
			"smells like tuna",
			"would rather be in the kitchen",
			"looks like a redneck",
			"always thought %n was rather cute",
			"is climbin' in yo window snatchin' yo people up",
			"wishes their girlfriend was hot like %n",
			"wets the bed",
			"wouldn't go near %n with a 39 1/2 foot pole",
			"is too hot to handle",
			"wishes they were as hot as " . array_pop($names),
			"is the alpha female",
			"is the alpha male",
			"will love you long time",
			"eats the breakfast of champions",
			"should probably come out of the closet",
			"loves to play InkLink",
			"would rather be fishing",
			"can't believe it's not butter"
		);
		shuffle($adjective);

		$quotes = array();
		
		switch ( date('N') )
		{
			// Sunday
			case 1:
			{
				$quotes = array(
					array(
						"quote"	=> "A good painting to me has always been like a friend. It keeps me company, comforts and inspires.",
						"author"	=> "Hedy Lamarr"
					), array(
						"quote" =>  "A great artist is always before his time or behind it.",
						"author" =>  "George Edward Moore"
					), array(
						"quote" =>  "A guilty conscience needs to confess. A work of art is a confession.",
						"author" =>  "Albert Camus"
					), array(
						"quote" =>  "A man paints with his brains and not with his hands.",
						"author" =>  "Michelangelo"
					), array(
						"quote" =>  "A painting that is well composed is half finished.",
						"author" =>  "Pierre Bonnard"
					), array(
						"quote" =>  "A picture is a poem without words.",
						"author" =>  "Horace"
					), array(
						"quote" => array_shift($names) . ' ' . array_shift($adjective) . '.',
						"author" => array_shift($names)
					), array(
						"quote" => "A picture is worth a thousand words.",
						"author" => "Napoleon Bonaparte"
					), array(
						"quote" => "A work of art is the unique result of a unique temperament.",
						"author" => "Oscar Wilde"
					), array(
						"quote" => "A sculptor is a person who is interested in the shape of things, a poet in words, a musician by sounds.",
						"author" => "Henry Moore"
					)
				);
				break;
			}
			
			// Monday
			case 2:
			{
				$quotes = array(
					array(
						"quote" => "Painting is poetry that is seen rather than felt, and poetry is painting that is felt rather than seen.",
						"author" => "Leonardo da Vinci"
					), array(
						"quote" => "A painter should begin every canvas with a wash of black, because all things in nature are dark except where exposed by the light.",
						"author" => "Leonardo da Vinci"
					), array(
						"quote" => "Every child is an artist. The problem is how to remain an artist once he grows up.",
						"author" => "Pablo Picasso"
					), array(
						"quote" => "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.",
						"author" => "George Bernard Shaw"
					), array(
						"quote" => "Everything you can imagine is real.",
						"author" => "Pablo Picasso"
					), array(
						"quote" => "Art is the lie that enables us to realize the truth.",
						"author" => "Pablo Picasso"
					), array(
						"quote" => "The most beautiful experience we can have is the mysterious - the fundamental emotion which stands at the cradle of true art and true science.",
						"author" => "Albert Einstein"
					), array(
						"quote" => "If you ask me what I came to do in this world, I, an artist, will answer you: I am here to live out loud.",
						"author" => "Émile Zola"
					), array(
						"quote" => "Art enables us to find ourselves and lose ourselves at the same time.",
						"author" => "Thomas Merton, @No Man Is an Island@"
					), array(
						"quote" => "Art washes away from the soul the dust of everyday life.",
						"author" => "Pablo Picasso"
					), array(
						"quote" => "Art is not what you see, but what you make others see.",
						"author" => "Edgar Degas"
					)
				);
				break;
			}
			
			// Tuesday
			case 3:
			{
				$quotes = array(
					array(
						"quote" => "I dream my painting and I paint my dream.",
						"author" => "Vincent van Gogh"
					), array(
						"quote" => "Creativity takes courage.",
						"author" => "Henri Matisse"
					), array(
						"quote" => "Only put off until tomorrow what you are willing to die having left undone.",
						"author" => "Pablo Picasso"
					), array(
						"quote" => "The painter has the Universe in his mind and hands.",
						"author" => "Leonardo da Vinci"
					), array(
						"quote" => "There is nothing more truly artistic than to love people.",
						"author" => "Vincent van Gogh"
					), array(
						"quote" => "A picture is a secret about a secret, the more it tells you the less you know.",
						"author" => "Diane Arbus"
					), array(
						"quote" => "Imgination rules the world",
						"author" => "Napoleon Bonaparte"
					), array(
						"quote" => "Life is a blank canvas, and you need to throw all the paint on it you can.",
						"author" => "Danny Kaye"
					), array(
						"quote" => "...He who works with his hands and his head and his heart is an artist.",
						"author" => "St. Francis of Assisi"
					), array(
						"quote" => "Love art in yourself, and not yourself in art.",
						"author" => "Constantin Stanislavski, @My Life In Art@"
					), array(
						"quote" => "Modern paintings are like women: You'll never enjoy them, if you try to understand them.",
						"author" => "Freddie Mercury"
					)
				);
				break;
			}
			
			default:
			{
				$quotes = array(
					array(
						"quote" => array_shift($names) . ' ' . array_shift($adjective) . '.',
						"author" => array_shift($names)
					)
				);
				break;
			}
		}

		
		$item = $quotes[array_rand($quotes)];

		echo $_GET['jsonp_callback'] . "(" . json_encode($item) . ");";
	}