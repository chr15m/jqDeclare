(function($) {
  $.fn.declare = function(definition) {
    var container = this.get(0) ? this : $("<div>");
    container.data("decl_definition", definition);
    return container;
  };

  $.fn.render = function(data) {
    var definition = this.data("decl_definition");
    if (definition) {
      this.html(jq_declarative_render(definition, data));
    } else {
      console.warn("Render called but no jQuery declaration has been set.");
    }
    return this;
  }

  // turn a definition into an array of jQuery $() consumable elements
  function jq_declarative_render(definition, data) {
    if (definition && definition["jquery"]) {
      return definition;
    } else if (definition && definition[0] && typeof(definition[0]) == "string") {
      var tag = definition[0];
      var attrs = definition[1];
      // TODO: support react style multi children here
      var content = definition[2];
      var el = $(document.createElement(tag));
      // TODO: special case textarea/input caret position?
      for (var a in attrs) {
        // pass through jquery callables or set attr
        if (el[a]) {
          el[a](attrs[a]);
        } else {
          el.attr(a, attrs[a]);
        }
      }
      if (typeof(content) == "string") {
        el.text(content);
      } else {
        el.html(jq_declarative_render(content, data));
      }
      return el;
    } else if ($.isFunction(definition)) { // function
      return jq_declarative_render(definition(data), data);
    } else if (definition && definition[0] && $.isArray(definition[0])) {
      return definition.map(function (subdefinition) {
        return jq_declarative_render(subdefinition, data);
      });
    }
    return null;
  }
}(jQuery));
