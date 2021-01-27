# downupPopup.js  [![](https://img.shields.io/badge/ali.dincerx-Follow-blue?style=social&logo=instagram)](https://instagram.com/ali.dincerx)

> Ali Dinçer

### [Demo](https://downupPopupjs.dincerali.com) 

## Usage

* * * * *

1. Include jQuery

``` html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
```

2. Include plugin's code

``` html
<link rel="stylesheet" href="downupPopup/downupPopup.css">
<script src="downupPopup/downupPopup.js"></script> <!-- don't forget - add after jquery -->
```

3. Create an element

``` html
<div id="myElement1">
  <div class="downupPopup-content">
  </div>
</div>
```

4. Call the plugin

``` javascript
$("#myElement1").downupPopup();
```

### Default Options

``` javascript
$("#myElement1").downupPopup({ 
 duration: "300", // milliseconds
 animation: "ease", // css effects -> ease, linear, ease-in, ease-out, ease-in-out, cubic-bezier(n,n,n,n)
 background: true, // true, false -> dark background
 radiusLeft: "10px", // top-left-radius
 radiusRight: "10px", // top-right-radius
 distance: 20, // distance top
 headerText: "", // title, you can use HTML here -> <b>Example</b>
 width: "100%", // width -> 100%, 80%, 200px etc.
 contentScroll: false // true, false -> for use, <div class="downupPopup-content"></div> have to inside the element
});
```

### Open - Close

``` javascript
$("#myElement1").downupPopup('open');
$("#myElement1").downupPopup('close');
```

* * * * *

## Examples

* * * * *

### Open With Button

``` javascript
$("#btn-1").click(function () { 
  $("#myElement1").downupPopup("open"); 
});
```

### Duration

``` javascript
$("#duration-700").downupPopup({
 duration: 700 
});
```

### Animation

``` javascript
$("#linear").downupPopup({ 
 animation: "linear",
 duration: 400
}); 

$("#cubic").downupPopup({
 animation: "cubic-bezier(.96,.33,0,1)",
 duration: 1000 
});
```

### Backgorund

``` javascript
$("#background").downupPopup({ 
 background: false
});
```

### Radius

``` javascript
$("#radius").downupPopup({ 
 radiusLeft: "40px",
 radiusRight: "0px" 
});
```

### Distance

``` javascript
$("#distance0").downupPopup({ 
 distance: 0,
 radiusLeft: "0px",
 radiusRight: "0px" 
}); 
                
$("#distance70").downupPopup({
 distance: 70 
});
```

### Header Text / Title

``` javascript
$("#headertext").downupPopup({
 headerText: "<h5 class='bg-dark text-white'>html is usable here</h5>"
});
```

### Width

``` javascript
$("#width-90").downupPopup({
 width: '90%'
});
```

### Content Scroll


``` javascript
$("#contentscroll").downupPopup({
 contentScroll: true 
});

<div id="contentscroll">
  <div class="downupPopup-content">
     your HTML elements... 
  </div>
</div>
```

* * * * *

#### [Download](https://downupPopupjs.dincerali.com/downupPopupjs.rar)

* * * * *

### Responsive and Mobile Performance

* * * * *

![downupPopup](https://downupPopupjs.dincerali.com/mobile.gif)

* * * * *

Copyright 2021, Ali Dinçer

Dual licensed under the MIT or GPL.

written by Ali Dinçer

[dincerali.com](https://dincerali.com)
