![alt text](https://raw.githubusercontent.com/rognstadragnar/simple-scroll/master/logo.png)
Simple smooth, animated scroll thingamajiggy written in ES2015.

### Basic usage
```javascript
var simpleScroll = require('simple-scroll');

simpleScroll.element('myId');
```


### Installation
```
npm install simple-scroll
```

### Features
* Scroll to an element with an optional offset
* Scroll to the bottom or the top off the page
* Scroll a set amount of pixels, viewport height, viewport width or percent
* Set up automatic usage for internal links
* Set the scroll duration and the min/max speed

### Example usage
```javascript
var simpleScroll = require('simple-scroll');


//Required element ID as the first parameter,
//optionally an offset as the second parameter animated
//optionally a third parameter for scroll duration
simpleScroll.element('myId', 20, 100);

//the first parameter (amount) is required, the second (duration) is optional
simpleScroll.px(500, 30); //scrolls 500 pixels down in 30 milliseconds
simpleScroll.vh(5); //scrolls 5 viewport height down
simpleScroll.vw(-5); //scrolls 5 viewport width up
simpleScroll.percent(50); //scrolls 50% of the entire page down

//the first parameter (duration) is optional
simpleScroll.toTop(); //scroll to the top
simpleScroll.toBottom(400); //scroll to the bottom in 400 milliseconds
simpleScroll.internalLinks(); //sets up scrolling for internal links


//Set the settings by passing in an object
simpleScroll.setSettings({
    duration: 100,
    minSpeed: 3,
    maxSpeed: 15
})
//These settings are the default settings
```


### Todo
* Scroll timing functions (e.g. ease, linear, cubic-bezier etc)

If it is of interest, please feel free to contribute on [Github](https://github.com/rognstadragnar/simple-scroll "github")

And yes, I am aware that there are better alternatives already out there. This is mostly my own learning.
