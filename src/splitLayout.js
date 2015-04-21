var SplitLayout = function(navWidth,minWidth,navStyle,contentStyle){
	navWidth = (typeof arguments[0] === 'number') ? arguments[0] : 200;
	minWidth = (typeof arguments[1] === 'number') ? arguments[1] : 200;
	navStyle = (typeof arguments[2] === 'object') ? arguments[2] : {padding:'10px'};
	// Add required css to user supplied css for nav and content elements
	navStyle['white-space']='nowrap';
	navStyle['overflow']='hidden';
	navStyle['text-overflow']='ellipsis';
	navStyle['position']='absolute';
	navStyle['top']='0';
	navStyle['left']='0';
	navStyle['bottom']='0';
	contentStyle = (typeof arguments[3] === 'object') ? arguments[3] : {padding:'10px'};
	contentStyle['white-space']='nowrap';
	contentStyle['overflow']='hidden';
	contentStyle['text-overflow']='ellipsis';
	contentStyle['position']='absolute';
	contentStyle['top']='0';
	contentStyle['right']='0';
	contentStyle['bottom']='0';
	var go = true;
	window.addEventListener("DOMContentLoaded", function(){
		var splitter = document.createElement('div');
		var nav = document.getElementById('nav');
		if(typeof nav === 'undefined' || nav == null){
			alert("Left pane '#nav' not found.");
			go=false;
			return;
		}
		var content = document.getElementById('content');
		if(typeof content === 'undefined' || content == null){
			alert("Right pane '#content' not found.");
			go=false;
			return;
		}
		var eleStyle = document.createElement('style'),
		navCSS="";
		for(key in navStyle){
			navCSS+=key+":"+navStyle[key]+";"
		}
		var contentCSS="";
		for(key in contentStyle){
			contentCSS+=key+":"+contentStyle[key]+";"
		}
		css = "*{box-sizing:border-box}" +
		"body{margin:0;padding:0;border:0;width:100%;height:100%;overflow:hidden}" +
		"#container{position:absolute;top:0;left:0;right:0;bottom:0}" +
		"#nav{"+navCSS+"}" +
		"#content{"+contentCSS+"}" +
		"#splitter{position:absolute;background:#e8e8e8 url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAvBAMAAADdg827AAAAJFBMVEWws7rGx8zMzdChpq64u8CqrrW/wcWdoaqSl6GmqbHR0tUAAAAc4jdzAAAADHRSTlOZmZmZmZmZmZmZmQDJ3LphAAAAKUlEQVQI12PYxhpZwCDkwGpADpGYCiSk3IFESgWQ8GynsWKyiV1iDhMAtikgHZgUCDoAAAAASUVORK5CYII=') no-repeat;background-position: center center;border-right:1px #999 dotted;border-left:1px #999 dotted;top:0;bottom:0;right:0px;width:7px;cursor:ew-resize}" +
		".noSel{-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none}",
		head = document.head || document.getElementsByTagName('head')[0];
		eleStyle.type = 'text/css';
		eleStyle.appendChild(document.createTextNode(css));
		head.insertBefore(eleStyle,head.getElementsByTagName('style')[0]);
			var px2percent = (navWidth/window.innerWidth)*100;
			var contentWidth = 100 - px2percent;
			nav.style.right = contentWidth + '%';
			content.style.left = px2percent + '%';
			splitter.id = 'splitter';
			nav.appendChild(splitter);
	});
	window.addEventListener("load", function(){
		if(!go){return};
		if((new RegExp("(?:^|;\\s*)" + encodeURIComponent("winposition").replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie)){
			var winp = decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent("winposition").replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
			if(winp!=null){
				nav.style.right = winp.split('|')[0];
				content.style.left = winp.split('|')[1];
			}
		}
		splitter.onmousedown = function() {
			document.onmousemove = function(e) {
				e = e || event;
				function fixWhich(e) {
					if (!e.which && e.button) {
						if (e.button & 1) e.which = 1
					}
				}
				if(e.which == 1 && e.clientX >= 0 && e.clientX <= window.innerWidth && e.clientX>=minWidth && e.clientX<=window.innerWidth-minWidth){
					nav.classList.add('noSel');
					var rightLeft  = ((e.clientX+5)/window.innerWidth)*100;
					var leftRight = 100-rightLeft;
					rightLeft = rightLeft.toFixed(2) + '%';
					leftRight = leftRight.toFixed(2) + '%';
					nav.style.right = leftRight;
					content.style.left = rightLeft;
					document.cookie="winposition="+encodeURIComponent(leftRight+"|"+rightLeft)+"; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
				}
			}
			document.onmouseup = function(ev) {
				//nav.className = null;
				nav.classList.remove('noSel');
				document.onmousemove = null
			}
		}
		document.getElementById('splitter').ondragstart = function() { return false }
	})
}