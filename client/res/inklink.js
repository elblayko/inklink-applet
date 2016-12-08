//////////////////////////////////////////////////////
// inklink.js by Blake Renton (tatersalad58)
// Last updated 7/13/2012
// http://www.blakerenton.net/

//////////////////////////////////////////////////////
// You should not need to edit this file.

// User local variables.
User.uiHidden = false;

// Modifies the page CSS according to the active theme settings.
User.reloadTheme = function() {

	// Load hard-coded themes from config.
	var themes = User.themes;

	// If additional themes have been downloaded, include them.
	if ( localStorage.getItem("user-cache-themes") != undefined ) {
		var cachedThemes = JSON.parse(localStorage.getItem("user-cache-themes"))

		$.each(cachedThemes, function() {
			themes.push(this);
		});
	}

	// Get the active theme from application storage.
	var t = themes[localStorage.getItem("user-theme")];

	// Modify the background theme.
	var b = $("body");
	b.css("color", "#" + t.fg);
	b.css("background-color", "#" + t.bg);

	// Optional background image manipulation.
	if ( t.image != undefined ) {
		b.css("background-image", "url('" + t.image + "')");
	} else {
		b.css("background-image", "none");
	}

	// Optional background repeat manipulation.
	if ( t.repeat != undefined ) {
		b.css("background-repeat", t.repeat);
	} else {
		b.css("background-repeat", "no-repeat");
	}

	// Optional background scaling manipulation.
	if ( t.size != undefined ) {
		b.css("background-size", t.size);
	} else {
		b.css("background-size", "cover");
	}

	// Optional theme callback function.
	if ( t.active != undefined && typeof t.active == "function" ) {
		t.active();
	}
};

//////////////////////////////////////////////////////
// InkLink object

// InkLink local variables.
var InkLink = {};

InkLink.playerCount = -1;
InkLink.playerHistory = new Array();

// InkLink applet configuration.
InkLink.Applet = [
	{
		name: "Vanilla",
		//path: window.User.path + "/inklink2.dcr",
		path: "http://www.shockwave.com/content/inklink2/sis/inklink2.dcr",
		favicon: "http://dl.dropbox.com/u/7450541/InkLink/icons/1336445806_palette.ico",
		enabled: true
	},
	{
		name: "Halloween",
		path: window.User.path + "/inklinkHalloween.dcr",
		favicon: "http://dl.dropbox.com/u/7450541/InkLink/icons/1336445746_pumpkin.ico"
	},
	{
		name: "Winter",
		path: window.User.path + "/inklink2.dcr",
		favicon: ""
	}
];

// Reload the InkLink applet.
InkLink.reload = function() {

	// Get the InkLink container.
	var container = $("#ink-container");

	// Clear the old InkLink.
	container.empty();

	// Fetch user data.
	var account = localStorage.getItem("user-account");
	var theme = localStorage.getItem("user-theme");
	var applet = localStorage.getItem("user-applet");

	// Fetch additional data.
	var loader = this.Applet[applet].path;
	var favicon = this.Applet[applet].favicon;

	// Change favicon and title.
	$("#favicon").get(0).href = favicon;
	document.title = InkLink.Applet[applet].name.capitalize();

	// Update applet.
	var data = $.extend({}, User.accounts[account]);
	data.loader = loader;
	$("#ink-container-tmpl").tmpl(data).appendTo(container);
};

//////////////////////////////////////////////////////
// Helper methods

// Image preloading.
$(function() {
	if ( !localStorage.getItem("user-disable-preload") ) {
		(function() {
			var images = [];

			$.fn.preload = function() {
				this.each(function() {
					$("<img />")[0].src = this;
				});
			};

			for ( var i = 0; i < User.themes.length; i++ ) {
				if ( User.themes[i].image != undefined ) {
					images.push(User.themes[i].image);
				}
			}

			$(images).preload();
		})();
	}
});

// Get number of online players from Shockwave's server.  Must go through proxy.
function fetchPlayerCount() {
	$.ajax({
		url: "http://blakerenton.net/ink/players.php",
		dataType: "jsonp",
		jsonp: "jsonp_callback",
		success: function(data) {
			InkLink.playerCount = data.split('=')[1];

			$("#players-online").animate({'top': '+=25px', opacity: 0}, 500, "easeInQuint", function() {
				$(this).css('top', '-25px');
				$(this).html("<p>" + InkLink.playerCount + " players online.</p>");
				$(this).animate({'top': '+=25px', opacity: 1}, 1000, "easeOutElastic");
			});
		}
	});
}

// Fetch and store remote themes from the server.
function fetchRemoteThemes() {
	$.getJSON('http://www.blakerenton.net/ink/themes.php?jsonp_callback=?', function(data) {
		var themes = [];
		$.each(data, function() {
			themes.push(this);
		});

		var json = JSON.stringify(themes);

		if ( localStorage.getItem("user-cache-themes") == json ) {
			alert("Nothing new.  :[");
		} else {
			alert("Done! Refresh page to finalize changes.");
			localStorage.setItem("user-cache-themes", json);
		}
	});
}

// Get a random quote from the server.
function randomQuote() {
	$.getJSON('http://blakerenton.net/ink/quotes.php?jsonp_callback=?', function(data) {
		var c = $("#random-quote");

		// Support for special characters.	
		$.each(data, function(k, v) {
			data[k] = v.replace("%n", User.accounts[localStorage.getItem("user-account")].sw3); // %n is replaced by the active account's username.
			data[k] = v.replace(/@(.*)@/g, "<em>$1</em>"); // Text between pairs of @s are italicized.		
		});
		
		// Updated the quote container.
		c.fadeOut(function() {
			c.empty();
			$("#random-quote-tmpl").tmpl(data).appendTo(c);
			c.fadeIn();
		});
	});
}

function flushThemes() {
	localStorge.setItem('user-cache-themes', '');
}

// String method for capitalization.
String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
};

// Local configuration initialization.
if ( !localStorage.getItem("user-theme") ) localStorage.setItem("user-theme", 0);
if ( !localStorage.getItem("user-applet") ) localStorage.setItem("user-applet", 0);
if ( !localStorage.getItem("user-account") ) localStorage.setItem("user-account", 0);
if ( !localStorage.getItem("user-disable-preload") ) localStorage.setItem("user-disable-preload", false);
if ( localStorage.getItem("user-applet-vanilla") == undefined ) localStorage.setItem("user-applet-vanilla", true);
if ( localStorage.getItem("user-remote-themes") == undefined ) localStorage.setItem("user-remote-themes", false);

if ( localStorage.getItem("user-applet-vanilla") == "true" ) InkLink.Applet[0].enabled = true;
if ( localStorage.getItem("user-applet-halloween") == "true" ) InkLink.Applet[1].enabled = true;
if ( localStorage.getItem("user-applet-winter") == "true" ) InkLink.Applet[2].enabled = true;


//////////////////////////////////////////////////////
// Main method

$(function() {

	// Initialize theme dropdown.
	$("#theme-select-tmpl").tmpl(User.themes).appendTo("#theme-select-container");
	if ( localStorage.getItem("user-cache-themes") != undefined ) {
		var themes = JSON.parse(localStorage.getItem("user-cache-themes"));
		$("#theme-select-tmpl").tmpl(themes).appendTo("#theme-select-container");

		$.each(themes, function() {
			User.themes.push(this);
		});
	}

	// Initialize game applet dropdown.
	var availableApplets = new Array();

	$.each( InkLink.Applet, function() {
		if ( this.enabled ) {
			availableApplets.push(this);
		}
	});

	$("#applet-select-tmpl").tmpl(availableApplets).appendTo("#applet-select-container");

	// Initialize accounts dropdown.
	var availableAccounts = new Array();

	$.each( User.accounts, function() {
		if ( this.sw8.length > 0 ) {
			availableAccounts.push(this);
		}
	});

	$("#account-select-tmpl").tmpl(availableAccounts).appendTo("#account-select-container");

	//////////////////////////////////////////////////////
	// Event hooks.

	// Theme switcher event.
	$("#theme-select-container").change(function( e ) {
		var i = e.target.selectedIndex;
		localStorage.setItem("user-theme", i);
		User.reloadTheme();
	});

	// Applet switcher event.
	$("#applet-select-container").change(function( e ) {
		var i = e.target.selectedIndex;
		localStorage.setItem("user-applet", i);
		InkLink.reload();
	});

	// Account switcher event.
	$("#account-select-container").change(function( e ) {
		var i = e.target.selectedIndex;
		localStorage.setItem("user-account", i);
		InkLink.reload();
	});

	// Disable preload event.
	$("#form-disable-preload").change(function( e ) {
		localStorage.setItem("user-disable-preload", e.target.checked);
	});

	// Settings toggle event.
	$("#settings-toggle").click(function() {
		$("#settings-btm").fadeToggle( "highlight", null, 1000 );
	});

	// Vanilla has been installed or removed.
	$("#form-applet-vanilla").change(function( e ) {
		localStorage.setItem("user-applet-vanilla", e.target.checked);
	});

	// Halloween has been installed or removed.
	$("#form-applet-halloween").change(function( e ) {
		localStorage.setItem("user-applet-halloween", e.target.checked);
	});

	// Winter has been installed or removed.
	$("#form-applet-winter").change(function( e ) {
		localStorage.setItem("user-applet-winter", e.target.checked);
	});

	// Remote themes toggle.
	$("#form-remote-theme-tick").change(function( e ) {
		localStorage.setItem("user-remote-themes", e.target.checked);
		if ( !e.target.checked ) {
			localStorage.setItem("user-theme", 0);
			$("#theme-select-container option").eq(0);
		}
	});

	// Hide UI event.
	$("#form-hide-ui").click(function() {
		$("#settings").animate({opacity: 0}, 400);
		$("#settings-btm").animate({opacity: 0}, 400);

		User.uiHidden = true;

		$("#notify-show-ui").fadeIn().text("Press 'J' to show UI.");
		for ( var i = 0; i <= 3; i++ ) {
			$("#notify-show-ui").fadeOut().fadeIn();
		}
		$("#notify-show-ui").fadeOut();
	});

	// Show UI event.
	$("body").keypress(function(e) {
		if ( e.which == 106 && User.uiHidden ) {
			$("#subtle-text-left").hide();
			$("#settings").animate({opacity: 1});
			$("#settings-btm").animate({opacity: 1});

			User.uiHidden = false;
		}
	});

	// Show player graph event.
	$("#player-graph-toggle").click(function() {
		$("#player-graph").toggle();
	});

	// Refresh player count event.
	$("#players-online").click(fetchPlayerCount);

	$("#form-remote-theme-button").click(fetchRemoteThemes);

	//////////////////////////////////////////////////////
	// Final initialization.

	User.reloadTheme();
	InkLink.reload();
	fetchPlayerCount();
	randomQuote();

	// Player count and quote updating.
	setInterval(fetchPlayerCount, 60000);
	setInterval(randomQuote, 60000);

	// Set selected items.
	$("#theme-select-container option").eq(localStorage.getItem("user-theme")).attr("selected", "selected");
	$("#applet-select-container option").eq(localStorage.getItem("user-applet")).attr("selected", "selected");
	$("#account-select-container option").eq(localStorage.getItem("user-account")).attr("selected", "selected");

	$("#form-disable-preload").prop("checked", eval(localStorage.getItem("user-disable-preload")));
	$("#form-applet-vanilla").prop("checked", eval(localStorage.getItem("user-applet-vanilla")));
	$("#form-applet-halloween").prop("checked", eval(localStorage.getItem("user-applet-halloween")));
	$("#form-applet-winter").prop("checked", eval(localStorage.getItem("user-applet-winter")));
	$("#form-remote-theme-tick").prop("checked", eval(localStorage.getItem("user-remote-themes")));
});