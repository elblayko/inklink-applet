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
		sw1: "249564428",
		sw2: "6d3dbcab1bdb51cef76fb06120352f89",
		sw3: "tatersalad58",
		sw8: "6667d7e366539ab3ecd076b517b1f760"
	},

	// Additional accounts
	{
		sw1: "252799964",
		sw2: "5ee57d77d6941b50b0968113d4161c91",
		sw3: "appIebottomjeans",
		sw8: "26374b0ddcc7d31c798acc3772125172"
	},
	{
		sw1: "252891334",
		sw2: "ad226eda644f13941475ee3b8d26bcab",
		sw3: "whale",
		sw8: "41dba33113125b894906ea54d519859c"
	},
	{
		sw1: "252927056",
		sw2: "7e5491e3ac02c83e1b34df42e6878a25",
		sw3: "clam",
		sw8: "de47f0fc933f858c18f8225c5d5c5989"
	},
	{
		sw1: "252944453",
		sw2: "b0855a981f4b5cb7886df52d50c68121",
		sw3: "AshIynn",
		sw8: "98b1b0374844fb6afdef11ccae627a32"
	},
	{
		sw1: "252881937",
		sw2: "0fc582712cf5144bec72258db10813f2",
		sw3: "Conspire",
		sw8: "6fab7a0bdcde99a2619b942af9b23b79"
	},
	{
		sw1: "252881942",
		sw2: "024a0fef673906e84a68dcf9b5d7bb06",
		sw3: "Frostfall",
		sw8: "6fab7a0bdcde99a2619b942af9b23b79"
	},
	{
		sw1: "252881951",
		sw2: "c1d513ab0ddfe379df587be2e5595ed2",
		sw3: "Bloodboil",
		sw8: "9e9373e8c58a63ee32deb12937584fcf"
	},
	{

		sw1: "252798619",
		sw2: "d5c80c7dbc1a67c82a0dbc5d5ba480ad",
		sw3: "KinkLink",
		sw8: "994389e83eb703cf5cb6c93db5bc4f0d"
	},
	{
		sw1: "252798782",
		sw2: "f878b0f11a63c40d0030278a1fde9371",
		sw3: "DrFeeIgood",
		sw8: "acb73978e1646774dd5193265dfba05b"
	},
	{
		sw1: "252799014",
		sw2: "e804bb458b619e352fd4bc9f192aa021",
		sw3: "TrogdoR",
		sw8: "71267a94d09c416e722923116c08e62d"
	},
	{
		sw1: "252799980",
		sw2: "c9a1fb87cfee002599a581f4892f6f5e",
		sw3: "fapper",
		sw8: "26374b0ddcc7d31c798acc3772125172"
	},
	{
		sw1: "252803864",
		sw2: "3790ac371db89310fa6674fb711ca229",
		sw3: "40OzNChronic",
		sw8: "aa5dc425ae8c9c41ef49590c53b979a4"
	},
	{
		sw1: "252809195",
		sw2: "2096d463728b7a9665095a980af6ab3f",
		sw3: "MadPornoAction",
		sw8: "f94d2d741ecb511d54675426dea637c7"
	},
	{
		sw1: "252810285",
		sw2: "bc5b1a78b5a6df3bd12f791743ed2278",
		sw3: "BelleFourche",
		sw8: "5cde4ff0aeaf3d97d1b78a4f46e5cfb7"
	},
	{
		sw1: "252852603",
		sw2: "106e7173454085f887753a2ed2e5792b",
		sw3: "iGOOD",
		sw8: "6156cc9484caa203f205dbb2e2296b22"
	},
	{
		sw1: "252887504",
		sw2: "a46b07d84a7000396af9d5b19a087c0a",
		sw3: "omgwaffles",
		sw8: "5277fb3be9f2986295833ed388ffeae7"
	}
	/*
	{
		sw1: "252301403",
		sw2: "d46a9894a7477b2f84b8648b5aa32007",
		sw3: "EIizabeth",
		sw8: "3ab24b451227f18f1ccd1bccf1c2c6cf"
	},
	{

		sw1: "252521737",
		sw2: "5eaa2f0aea86ece2c85a15334c74ede3",
		sw3: "kilzard",
		sw8: "3ab24b451227f18f1ccd1bccf1c2c6cf"
	},
	{
		sw1: "252799031",
		sw2: "de255b33cbffff1968d5848bde4ec7ef",
		sw3: "TROGDOr",
		sw8: "71267a94d09c416e722923116c08e62d"
	},
	*/
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
