A jQuery plugin for building React-style declarative user interface components.

```html
<script src="https://chr15m.github.io/jqDeclare/jquery.declare.js"></script>
```

```javascript
$("#app").declare(function (name) {
  return ["button", {"click": function(ev) { alert("Hello " + name); }}, "say hello"];
}).render("Taylor");
```

[Demos and example code](http://chr15m.github.io/jqDeclare) | [Use](#use) | [Why?](#why)

## Use

### `$.fn.declare(declaration)`

The `declare` method is how you declare, and optionally mount, some piece of user interface.

A declaration can take the following forms:

 * jQuery object: `.declare($("<span>hello</span>").click(cb));`
 * jqDeclare definition: `.declare(["span", {"click": cb}, "hello"])`
 * Function: `.declare(function(data) { });` Here the data will be passed in by the `.render(data)` method below.
 * Or; an array of any of the above types: `.declare([$("<div>one</div>"), ["div", nil, "two"]])`.

You can call the `.declare()` method on an existing jQuery element: `$("#app").declare(declaration)` and then `#app` will be the default mount point for the component when rendered.

Or you can call the prototype: `var c = $.fn.declare(declaration)` which will provide a jQuery component which can later be mounted before or after rendering: `c.appendTo("#app").render()`.

### `component.render(data)`

The `render` method runs the declaration with some state (data) and replaces the contents of the mount-point with the resulting jQuery component.

## Why?

jQuery is [by far the most popular Javascript front-end framework in the world](https://www.similartech.com/compare/jquery-vs-react-js), appearing on some **~22m websites** as opposed to React's ~800k website footprint.
Building websites with jQuery can be frustrating and error prone because they must be built imperatively by explicitly telling the browser how to render everything.
React's big innovation was to bring a declarative style of programming to user interfaces which reduces complexity, errors, and lowers the maintainance burden.

The goal of this project is to have the best of both worlds: a ubiquitously deployed well known library with a modern declarative paradigm.

> Imperative programing is when your code specifies not just what you want to happen,
> but how you want it to happen. In other words, imperative programming means that you
> are dealing with many internals to make your code function properly.

-- [A Shift From Imperative to Declarative by Tyson Cadenhead](http://www.tysoncadenhead.com/blog/the-state-of-javascript-a-shift-from-imperative-to-declarative/)

