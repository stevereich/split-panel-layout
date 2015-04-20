# Split Panel Layout

Javascript for a simple two panel layout with splitter to drag and resize columns.

This is a very simple HTML template for a fluid, two column layout, that is split and can be resized by dragging the splitter.

![Screenshot](https://dl.dropbox.com/s/p83y6zv43vkk1id/screenshot.png)

Include the javascript file in the head of your HTML:
```HTML
<script language="JavaScript" type="text/javascript" 
	src="http://cdn.firemap.io/js/splitLayout.js"></script>
```
Then add the the HTML elements:

```HTML
<div id="container">
	<div id="nav">
		Navigation Panel
	</div>
	<div id="content">
		Content Panel
	</div>
</div>
```

Then, simply initialize SplitLayout(initialNavWidth(Number),minimumWidth(Number),navCSS(object),contentCSS(object))
```JavaScript
var myLayout = new SplitLayout(200,200,{
	"background-color":"#F5F5F5",
	"padding":"10px",
	"font-family":"Arial,sans-serif",
	"font-size":"10pt"
},
{
	"background-color":"#FFF",
	"padding":"10px",
	"font-family":"Arial,sans-serif",
	"font-size":"10pt"
}) 
```

# About Me

I'm a long time developer, but relatively new with managing my own Github repos. I appreciate your patience and guidance in helping me use it and making anything I throw up, better! 

Thanks,
-steve
