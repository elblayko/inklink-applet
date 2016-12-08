/**
* config.js by Blake Renton (tatersalad58)
* Last updated 7/9/2012
* http://www.blakerenton.net/
*
* Account configuration. Set up accounts here.
* Obtain values from page source while playing InkLink on Shockwave.com.
*/

var accounts = [

	// Default Account
	{
		sw1: "",
		sw2: "",
		sw3: "",
		sw8: ""
	},

	// Additional accounts
	{
		sw1: "",
		sw2: "",
		sw3: "",
		sw8: ""
	},
	{
		sw1: "",
		sw2: "",
		sw3: "",
		sw8: ""
	}
];

/**
*	Set up themes here.
*	Available parameters:
*	
*	name	- Title displayed in the theme dropdown.
*	fg		- Page foreground color. (Text)  Hex value without the hash.
*	bg		- Page background color.  Hex value without the hash.
*	image	- Optional - Page image overlay.
*	repeat	- Optional - Whether the background image repeat. "repeat" for repeat.
*	size	- Optional - Background image scale.
*	active	- Optional - Callback function that happens upon activation.
*/

var themes = [
	{
		name: "Denim",
		fg: "999999",
		bg: "cccccc",
		image: "http://img202.imageshack.us/img202/5386/screenshot2011080210123.png",
		repeat: "repeat",
		size: "25%"
	},
	{
		name: "White",
		fg: "000000",
		bg: "ffffff"
	},
	{
		name: "Black",
		fg: "ffffff",
		bg: "000000"
	}
];

/**********************************************
* Do not modify past this line.
**********************************************/

var User      = {};
User.path     = "res";
User.accounts = accounts;
User.themes   = themes;
