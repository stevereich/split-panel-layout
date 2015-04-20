# Split Panel Layout

Javascript for a simple two panel layout with splitter to drag and resize columns.

This is a very simple HTML template for a fluid, two column layout, that is split and can be resized by dragging the splitter.

Include the javascript file in the head of your HTML:

`<script language="JavaScript" type="text/javascript" src="http://cdn.firemap.io/js/splitLayout.js">

Then add the the HTML elements:

```
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
```
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

