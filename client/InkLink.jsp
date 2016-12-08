<!DOCTYPE html>
<!--
	InkLink.jsp by Blake Renton (tatersalad58)
	Last updated 7/7/2012
	http://www.blakerenton.net/
-->
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

		<link rel="stylesheet" type="text/css" href="res/inklink.css" />
		<link id="favicon" rel="shortcut icon" type="image/x-icon" />

		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/jquery-ui.min.js"></script>
		<script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.templates/beta1/jquery.tmpl.js"></script>

		<script type="text/javascript" src="res/config.js"></script>
		<script type="text/javascript" src="res/inklink.js"></script>
	</head>

	<body>
		<div id="random-quote"></div>

		<div id="settings">
			<div title="Modify the InkLink theme.  Themes may be configured in config.js.">
				<p>Theme</p>
				<select id="theme-select-container"></select>
			</div>

			<div title="Change the InkLink applet.  Modify through the configuration menu.">
				<p>Applet</p>
				<select id="applet-select-container"></select>
			</div>

			<div title="Change accounts.  Accounts may be configured in config.js">
				<p>Account</p>
				<select id="account-select-container"></select>
			</div>

			<div>
				<a target="_blank" href="http://www.shockwave.com/gamelanding/inklink.jsp">
					<img title="Play on Shockwave.com" height="16" width="16" src="http://dl.dropbox.com/u/7450541/InkLink/icons/external.png" />
				</a>
			</div>

			<div id="settings-toggle" title="Toggle settings.">
				<img src="http://dl.dropbox.com/u/7450541/InkLink/icons/gear.png" width="20" height="20" />
			</div>

			<div id="players-online" title="Updates once per minute. Click to refresh.">
				<img src="http://dl.dropbox.com/u/7450541/InkLink/icons/25-1.gif" width="20" height="20" />
			</div>

			<div id="player-graph"></div>

		</div> <!-- /settings -->

		<div id="wrapper">
			<div id="ink-container"></div>
		</div>

		<div id="settings-btm">

			<fieldset>
				<legend>Disable</legend>

				<form title="Disable image preloading to save bandwidth.">
					<label for="form-disable-preload">Image preload</label>
					<input id ="form-disable-preload" name="form-disable-preload" type="checkbox"  />
				</form>

				<form title="disable-player-update">
					<label for="form-disable-player-update">Player update</label>
					<input id="form-disable-player-update" type="checkbox" disabled="disabled" />
				</form>

				<form title="disable-random-quote">
					<label for="form-disable-random-quote">Random quote</label>
					<input id="form-disable-random-quote" type="checkbox" disabled="disabled" />
				</form>

			</fieldset>

			<fieldset>
				<legend>Installed</legend>

				<form title="Check which applets are installed.  Refresh page to finalize changes.">

					<label for="form-applet-halloween">Halloween</label>
					<input id ="form-applet-halloween" name="form-applet-halloween" type="checkbox"  />

					<label for="form-applet-winter">Winter</label>
					<input id ="form-applet-winter" name="form-applet-winter" type="checkbox"  />

				</form>
			</fieldset>
			
			<fieldset>
				<legend>Other</legend>
				
				<form title="Fetch pre-made themes.  Refresh page to finalize changes.">
					<input id="form-remote-theme-button" type="button" value="Check for new themes" />
				</form>
						
				<form title="Hide custom UI.  Press J to restore.">
					<input id="form-hide-ui" type="button" value="Hide UI" />
				</form>				
			</fieldset>
		
		</div>

		<div id="links">
			<a href="http://inklink.tumblr.com" target="_blank"><img src="http://dl.dropbox.com/u/7450541/InkLink/icons/tumblr.png" width="16" height="16" alt="Tumblr" title="Tumblr"/></a>
			<a href="http://www.blakerenton.net/" target="_blank"><img src="http://dl.dropbox.com/u/7450541/InkLink/icons/star.png" width="16" height="16" alt="Website" title="Website" /></a>
		</div>

		<div id="notify-show-ui">
		</div>

		<audio id="sfx" style="display: none;"></audio>

		<!-- Templates -->

		<script id="theme-select-tmpl" type="text/x-jquery-tmpl">
			{{if image}}
				<option data-fg="${fg}" data-bg="${bg}" data-image="${image}">${name}</option>
			{{else}}
				<option data-fg="${fg}" data-bg="${bg}">${name}</option>
			{{/if}}
		</script>

		<script id="applet-select-tmpl" type="text/x-jquery-tmpl">
			<option>${name}</option>
		</script>

		<script id="account-select-tmpl" type="text/x-jquery-tmpl">
			<option>${sw3}</option>
		</script>

		<script id="ink-container-tmpl" type="text/x-jquery-tmpl">
			<embed type="application/x-director" src="${loader}"
				sw1="${sw1}"
				sw2="${sw2}"
				sw3="${sw3}"
				sw8="${sw8}"
				swstretchstyle="fill"
				pluginspage="http://www.macromedia.com/shockwave/download/"
				width="750"
				height="350" />
		</script>

		<script id="random-quote-tmpl" type="text/x-jquery-tmpl">
			<div>
				<p>"${quote}" - {{html author}}</p>
			</div>
		</script>
	</body>
</html>